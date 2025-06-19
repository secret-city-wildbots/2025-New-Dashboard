import {
    NetworkTables,
    NetworkTablesTypeInfos,
    NetworkTablesTopic,
    NetworkTablesTypeInfo,
    NetworkTablesTypes,
} from "npm:ntcore-ts-client";
import { Socket } from "npm:socket.io";
import chalk from "npm:chalk";

export class NetworkTable {
    public nt: NetworkTables;

    constructor(URI: string, PORT: number) {
        this.nt = NetworkTables.getInstanceByURI(URI, PORT);
    }

    topicForwardAny(
        topicName: string,
        topicType: NetworkTablesTypeInfo,
        socket: Socket,
        volatile: boolean = false,
        likeAndSubscribe: boolean = true
    ) {
        const topic = this.nt.createTopic(
            "/SmartDashboard/" + topicName,
            topicType
        );

        this.subscribeAndPublish(topicName, topic, socket, volatile, likeAndSubscribe);
    }

    subscribeAndPublish(
        topicName: string,
        topic: NetworkTablesTopic<any>,
        socket: Socket,
        volatile: boolean = false,
        likeAndSubscribe: boolean = true
    ) {
        //multiple fallbacks, socket be weird sometimes frfr

        if (likeAndSubscribe) {
            setInterval(() => {
                if (topic.getValue() !== undefined && topic.getValue() !== null) {
                    if (volatile) {
                        socket.volatile.emit(topicName, topic.getValue());
                    } else {
                        socket.emit(topicName, topic.getValue());
                    }
                }
            }, 1000);

            topic.subscribe((val) => {
                if (val != null && val != undefined) {
                    if (volatile) {
                        socket.volatile.emit(topicName, val);
                    } else {
                        socket.emit(topicName, val);
                    }
                }
            });
        }

        socket.on(topicName, (val) => {
            try {
                topic.publish();
                topic.setValue(val);
            } catch (_err) {
                console.error(
                    "publish failed"
                );
            }
        });
    }
}

class TopicManager<T extends NetworkTablesTypes> {
    topicName: string;
    topic: NetworkTablesTopic<T>;
    socket: Socket;
    volatile: boolean;
    lastOverloadCheck: number;
    packetsSinceOverloadCheck: number = 0;

    constructor(
        topicName: string,
        topic: NetworkTablesTopic<T>,
        socket: Socket,
        volatile: boolean = false
    ) {
        this.topic = topic;
        this.topicName = topicName;
        this.socket = socket;
        this.volatile = volatile;
        this.lastOverloadCheck = performance.now();
        this.topic.publish();

        setInterval(this.checkForOverload, 1000);
    }

    checkForOverload() {
        if (this.lastOverloadCheck + 1000 < performance.now()) {
            if (this.packetsSinceOverloadCheck > 20) {
                this.volatile = true;
            }

            this.lastOverloadCheck = performance.now();
        }
    }

    checkForImmediateOverload() {
        //packet rate > 100 pps triggers an immediate overload
        //but we need to check to make sure that its been at least 100 ms to ensure it is accurate
        if (
            performance.now() - this.lastOverloadCheck > 100 &&
            this.packetsSinceOverloadCheck * 10 >
                performance.now() - this.lastOverloadCheck
        ) {
            this.volatile = true;
        }
    }

    //abstract the subscribe function to allow a sneaky little overload checker in
    subscribe() {
        setInterval(() => {
            if (
                this.topic.getValue() !== undefined &&
                this.topic.getValue() !== null
            ) {
                if (this.volatile) {
                    this.socket.volatile.emit(
                        this.topicName,
                        this.topic.getValue()
                    );
                } else {
                    this.socket.emit(this.topicName, this.topic.getValue());
                }
            }
        }, 1000);

        this.topic.subscribe((newVal: T | null) => {
            this.packetsSinceOverloadCheck++;

            if (newVal !== null) {
                if (newVal != null && newVal != undefined) {
                    if (this.volatile) {
                        this.socket.volatile.emit(this.topicName, newVal);
                    } else {
                        this.socket.emit(this.topicName, newVal);
                    }
                }
            }
        });
    }

    publishVal(val: T) {
        try {
            this.topic.setValue(val);
        } catch (_err) {
            console.error(
                "publish failed, likely bc the nt not connected. Use ignore-nt arg to add fake values and remove this message."
            );
        }
    }
}

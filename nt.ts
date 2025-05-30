import {
    NetworkTables,
    NetworkTablesTypeInfos,
    NetworkTablesTopic,
} from "npm:ntcore-ts-client";
import { Socket } from "npm:socket.io";
import chalk from "npm:chalk";

export class NetworkTable {
    public nt: NetworkTables;

    constructor(URI: string, PORT: number) {
        this.nt = NetworkTables.getInstanceByURI(URI, PORT);
    }

    getDoubleSubscriber(topicName: string, defVal?:number) {
        return new DoubleSubscriber(topicName, this.nt, defVal);
    }

    getBooleanPublisher(topicName:string) {
        return new BooleanPublisher(topicName, this.nt);
    }

    /*
    next are all of the topic forwards
    notice that they all use socket.volatile and that is
    so that it doesn't build up a queue of messages
    */

    topicForwardDouble(topicName: string, socket: Socket) {
        const topic: NetworkTablesTopic<number> = this.nt.createTopic<number>(
            "/SmartDashboard/" + topicName,
            NetworkTablesTypeInfos.kDouble
        );

        this.subscribeAndPublish(topicName, topic, socket);
    }

    topicForwardDoubleArray(topicName: string, socket: Socket) {
        const topic: NetworkTablesTopic<number[]> = this.nt.createTopic<
            number[]
        >("/SmartDashboard/" + topicName, NetworkTablesTypeInfos.kDoubleArray);

        this.subscribeAndPublish(topicName, topic, socket);
    }

    topicForwardString(topicName: string, socket: Socket) {
        const topic: NetworkTablesTopic<string> = this.nt.createTopic<string>(
            "/SmartDashboard/" + topicName,
            NetworkTablesTypeInfos.kString
        );

        this.subscribeAndPublish(topicName, topic, socket);
    }

    topicForwardStringArray(topicName: string, socket: Socket) {
        const topic: NetworkTablesTopic<string[]> = this.nt.createTopic<
            string[]
        >("/SmartDashboard/" + topicName, NetworkTablesTypeInfos.kStringArray);

        this.subscribeAndPublish(topicName, topic, socket);
    }

    topicForwardBoolean(topicName: string, socket: Socket) {
        const topic: NetworkTablesTopic<boolean> = this.nt.createTopic<boolean>(
            "/SmartDashboard/" + topicName,
            NetworkTablesTypeInfos.kBoolean
        );

        this.subscribeAndPublish(topicName, topic, socket);
    }

    topicForwardBooleanArray(topicName: string, socket: Socket) {
        const topic: NetworkTablesTopic<boolean[]> = this.nt.createTopic<
            boolean[]
        >("/SmartDashboard/" + topicName, NetworkTablesTypeInfos.kBooleanArray);

        this.subscribeAndPublish(topicName, topic, socket);
    }

    subscribeAndPublish(topicName:string, topic:NetworkTablesTopic<any>, socket:Socket, ) {
        topic.subscribe((val) => {
            //console.log(chalk.yellow(val));
            if (val) {
                socket.volatile.emit(topicName, val);
            }
        });

        socket.on(topicName, (val) => {
            try {
                topic.publish();
                topic.setValue(val);
            } catch(_err) {
                console.error("publish failed, likely bc the nt not connected. Use ignore-nt arg to add fake values and remove this message.");
            }
        });
    }
}

class DoubleSubscriber {
    public topic: NetworkTablesTopic<number>;
    public val: number | undefined | null;

    constructor(topicName: string, nt: NetworkTables, defVal?: number) {
        this.topic = nt.createTopic<number>(
            "/SmartDashboard/" + topicName,
            NetworkTablesTypeInfos.kDouble
        );
        this.val = defVal;
        this.topic.subscribe((value) => {
            this.val = value;
        });
    }

    getVal() {
        return this.val;
    }
}

class BooleanPublisher {
    public topic:NetworkTablesTopic<boolean>;

    constructor(topicName:string, nt:NetworkTables) {
        this.topic = nt.createTopic<boolean>(
            "/SmartDashboard/" + topicName,
            NetworkTablesTypeInfos.kBoolean
        );
        this.topic.publish();
    }

    setVal(val:boolean) {
        this.topic.setValue(val);
    }
}
import { h } from "npm:preact";
import type { ComponentChildren } from "npm:preact";

export default function Container({ children }:{ children:ComponentChildren }) {
    return (
        <div class="container-fluid row">
            {children}
        </div>
    )
}
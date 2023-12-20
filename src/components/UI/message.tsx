import { component$ } from "@builder.io/qwik";
import { flex } from "~/styled-system/patterns";

import { MessageStyle } from "~/styles/recipes/messages";

interface Props {
    text: string;
    type: "send" | "receive";
}

export const Message = component$((props: Props) => {
    return (
        <div
            class={flex({
                justifyContent:
                    props.type === "send" ? "flex-end" : "flex-start",
            })}
        >
            <div class={MessageStyle({ type: props.type })}>{props.text}</div>
        </div>
    );
});

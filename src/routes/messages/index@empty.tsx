import { component$ } from "@builder.io/qwik";
import { Message } from "~/components/UI/message";
import { NewMessage } from "~/components/messages/NewMessage";
import { flex } from "~/styled-system/patterns";

export default component$(() => {
    const testMessage =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis.";
    return (
        <div
            class={flex({
                flexDirection: "column-reverse",
                flexGrow: "1",
                overflow: "auto",
            })}
        >
            <NewMessage />
            <Message text={testMessage} type="receive" />
            <Message text={testMessage} type="send" />
            <Message text={testMessage} type="send" />
            <Message text={testMessage} type="receive" />
        </div>
    );
});

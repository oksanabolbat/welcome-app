import { component$ } from "@builder.io/qwik";

import { HeadingStyle } from "~/styles/recipes/text";

import { flex } from "~/styled-system/patterns";
import { Toggle } from "~/components/UI/toggle";

const TAB_BUTTONS = [
    { id: "reports", label: "Reports" },
    { id: "legal", label: "Legal" },
];

export default component$(() => {
    return (
        <div>
            <h2 class={HeadingStyle({ type: "secondary" })}>Documents</h2>
            <div class={flex({ justifyContent: "end" })}>
                <Toggle buttons={TAB_BUTTONS} activeTab="legal" />
            </div>
        </div>
    );
});

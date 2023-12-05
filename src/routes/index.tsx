import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { buttonStyle } from "~/styled-system/recipes/button";

export default component$(() => {
    return (
        <>
            <h1>Hi 👋</h1>
            <p>
                Can't wait to see what you build with qwik!
                <br />
                Happy coding.
            </p>
            <button class={buttonStyle()}>hello</button>
        </>
    );
});

export const head: DocumentHead = {
    title: "welcome",
    meta: [
        {
            name: "description",
            content: "welcome",
        },
    ],
};

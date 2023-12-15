import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";

import { css } from "~/styled-system/css";

export default component$(() => {
    const nav = useNavigate();
    useVisibleTask$(() => {
        setTimeout(() => {
            nav("/login");
        }, 2000);
    });
    return (
        <div
            class={[
                css({
                    display: "flex",
                    alignItems: "center",
                    w: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "4.25rem",
                    textStyle: "textStyles.headings",
                    color: "#fff",
                    pb: "10.5rem",
                }),
            ]}
        >
            <div class={css({ fontSize: "2rem", textAlign: "center" })}>
                [Fictive company logo]
            </div>
            <h2>Fictive company A/S</h2>
        </div>
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

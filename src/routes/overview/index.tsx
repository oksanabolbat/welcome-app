import { component$ } from "@builder.io/qwik";
import { TotalValue } from "~/components/overview/total-value";
import { TotalValueSummary } from "~/components/overview/total-value-summary";
import { css } from "~/styled-system/css";
import { HeadingStyle } from "~/styles/recipes/text";

export default component$(() => {
    const userName = "Jessie";
    return (
        <>
            <h2
                class={[
                    HeadingStyle({ type: "secondary" }),
                    css({ ml: "1.8rem" }),
                ]}
            >
                Welcome, {userName}.
            </h2>
            <TotalValueSummary />

            <TotalValue />
        </>
    );
});

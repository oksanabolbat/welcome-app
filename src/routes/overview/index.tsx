import { component$ } from "@builder.io/qwik";
import { TotalValue } from "~/components/overview/TotalValue";
import { TotalValueSummary } from "~/components/overview/TotalValueSummary";
import { css } from "~/styled-system/css";

export default component$(() => {
    const userName = "Jessie";
    return (
        <>
            <h2
                class={css({
                    fontSize: "2.125rem",
                    fontWeight: "700",
                    textAlign: "left",
                })}
            >
                Welcome, {userName}.
            </h2>
            <TotalValueSummary />
            <TotalValue />
        </>
    );
});
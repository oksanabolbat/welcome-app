import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const TotalValueSummary = component$(() => {
    const totalValue = "2.145.123,25";
    const units = "Kr.";
    return (
        <div
            class={css({
                bg: "linear-gradient(269deg, #31A078 49.47%, #31A05F 95.75%)",
                backdropFilter: "blur(2px)",
                borderRadius: "1.25rem",
                m: "1.19rem 0 2.87rem",
                p: "1rem 0.375rem 0.875rem 1.875rem",
                display: "inline-flex",
                flexDir: "column",
                alignItems: "flex-start",
                gap: "0.0625rem",
                color: "main",
            })}
        >
            <p class={css({ textStyle: "textStyles.body" })}>
                Your total value
            </p>
            <p
                class={css({
                    textStyle: "textStyles.headingPrimary",
                    fontWeight: "700",
                    minH: "3.0625rem",
                })}
            >
                {" "}
                {totalValue} {units}
            </p>
        </div>
    );
});

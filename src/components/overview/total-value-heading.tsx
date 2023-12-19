import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

import { Toggle } from "../UI/toggle";

export const TotalValueHeading = component$(() => {
    const TAB_BUTTONS = [
        { id: "day", label: "Daily" },
        { id: "week", label: "Weekly" },
        { id: "year", label: "Annually" },
    ];

    return (
        <div class={flex({ justifyContent: "space-between" })}>
            <div>
                <h3
                    class={css({
                        fontSize: "1.14513rem",
                        lineHeight: "1.6rem",
                        fontWeight: "700",
                    })}
                >
                    Total value
                </h3>
                <p
                    class={css({
                        fontSize: "0.625rem",
                        color: "#86909C",
                        lineHeight: "1.6rem",
                    })}
                >
                    01 Jan 24 - 24 Mar 24
                </p>
            </div>
            <Toggle buttons={TAB_BUTTONS} activeTab="year" />
        </div>
    );
});

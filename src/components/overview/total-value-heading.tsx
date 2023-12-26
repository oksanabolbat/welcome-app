import { component$ } from "@builder.io/qwik";

import { flex } from "~/styled-system/patterns";

import { Toggle } from "../UI/toggle";
import { DateStringStyle, HeadingStyle } from "~/styles/recipes/text";
import { css } from "~/styled-system/css";

export const TotalValueHeading = component$(() => {
    const TAB_BUTTONS = [
        { id: "day", label: "Daily" },
        { id: "week", label: "Weekly" },
        { id: "year", label: "Annually" },
    ];

    return (
        <div
            class={[
                flex({ justifyContent: "space-between" }),
                css({ mx: "1.8rem" }),
            ]}
        >
            <div>
                <h3 class={HeadingStyle({ type: "section" })}>Total value</h3>
                <p class={DateStringStyle()}>01 Jan 24 - 24 Mar 24</p>
            </div>
            <Toggle buttons={TAB_BUTTONS} activeTab="year" />
        </div>
    );
});

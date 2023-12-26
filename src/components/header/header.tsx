import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

import { NotificationIcon } from "./notification-icon";

export const Header = component$(() => {
    return (
        <header
            class={[
                flex({ justifyContent: "space-between" }),
                css({ px: "1.8rem", mb: "1.5rem" }),
            ]}
        >
            <div></div>
            <h4
                class={css({
                    textStyle: "textStyles.headingPrimary",
                    fontSize: "1rem",
                })}
            >
                Fictive company A/S
            </h4>

            <NotificationIcon />
        </header>
    );
});

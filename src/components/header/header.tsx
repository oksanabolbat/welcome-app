import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";
import { Notification } from "./Notification";

export const Header = component$(() => {
    return (
        <header class={flex({ justifyContent: "space-between" })}>
            <div></div>
            <h4
                class={css({
                    textStyle: "textStyles.headingPrimary",
                    fontSize: "1rem",
                })}
            >
                Fictive company A/S
            </h4>
            <Notification />
        </header>
    );
});

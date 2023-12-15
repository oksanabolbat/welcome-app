import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import { Button } from "~/styles/recipes/button";

import { containerStyle } from "~/styles/recipes/container";

export default component$(() => {
    const nav = useNavigate();
    return (
        <div class={containerStyle()}>
            <h1
                class={css({
                    textStyle: "textStyles.headingMain",
                    color: "headingText",
                    mb: "2.5rem",
                })}
            >
                Fictive company A/S
            </h1>
            <h2
                class={css({
                    textStyle: "textStyles.headingSecondary",
                    color: "mainText",
                })}
            >
                Stay on top of your investments at Fictive Company A/S
            </h2>
            <p
                class={css({
                    textStyle: "textStyles.paragraph",
                    color: "contentText",
                })}
            >
                The recommended tool for a better and easier process if you want
                to stay up to date with your financial advisor
            </p>
            <Button
                class={css({ color: "main" })}
                onClick$={() => nav("/todo")}
            >
                Login
            </Button>
        </div>
    );
});

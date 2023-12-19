"use client";
import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { footerIconStyle } from "~/styles/recipes/footer";
import { Link, useLocation } from "@builder.io/qwik-city";

interface Props {
    ref: string;
    text: string;
}

export const FooterLink = component$((props: Props) => {
    const location = useLocation();

    return (
        <Link href={props.ref} class={css({ w: "3.125rem", flexGrow: "1" })}>
            <div
                class={
                    location.url.pathname === props.ref + "/"
                        ? footerIconStyle({ type: "active" })
                        : footerIconStyle()
                }
            >
                <Slot />
                <br />
                <span>{props.text}</span>
            </div>
        </Link>
    );
});

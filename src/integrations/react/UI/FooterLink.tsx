import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { footerIconStyle } from "~/styles/recipes/footer";
import { Link } from "@builder.io/qwik-city";

interface Props {
    ref: string;
    text: string;
    isActive?: boolean;
}

export const FooterLink = component$((props: Props) => {
    return (
        <Link href={props.ref} class={css({ w: "3.125rem" })}>
            <div
                class={
                    props.isActive
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

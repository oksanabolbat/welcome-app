import { component$ } from "@builder.io/qwik";
import { FooterLink } from "~/integrations/react/UI/footer-link";
import {
    MuiIconCollection,
    MuiIconHome,
    MuiIconMail,
    MuiIconPerson,
    MuiIconSearch,
} from "~/integrations/react/UI/icons/icons";
import { css } from "~/styled-system/css";

export default component$(() => {
    return (
        <footer
            class={css({
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                bottom: "0",
                width: "100%",
                height: "4.68rem",
                color: "mainText",
                bgColor: "main",
                opacity: "0.8",
            })}
        >
            <FooterLink ref="/overview" text="Overview">
                <MuiIconHome />
            </FooterLink>
            <FooterLink ref="/documents" text="Documents">
                <MuiIconSearch />
            </FooterLink>
            <FooterLink ref="/portfolio" text="Portfolio">
                <MuiIconCollection />
            </FooterLink>
            <FooterLink ref="/messages" text="Messages">
                <MuiIconMail />
            </FooterLink>
            <FooterLink ref="/account" text="Account">
                <MuiIconPerson />
            </FooterLink>
        </footer>
    );
});

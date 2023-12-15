import { component$ } from "@builder.io/qwik";
//import { Link, useLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
//import { footerBtnStyle } from "~/styles/recipes/button";
import { css } from "~/styled-system/css";

export const Footer = component$(() => {
    //  const location = useLocation();

    return (
        <>
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
                })}
            >
                <Link href="/overview">Overview</Link>
                <Link href="/documents">Documents</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/messages">Messages</Link>
                <Link href="/account">Account</Link>
            </footer>
        </>
    );
});

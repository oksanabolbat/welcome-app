import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import "@pandacss/dev";
import { vstack } from "~/styled-system/patterns";

export const Header = component$(() => {
    return (
        <header>
            <nav class={vstack()}>
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/weather-today">check weather</Link>
                    </li>
                    <li>
                        <Link href="/to-do">todo list</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});

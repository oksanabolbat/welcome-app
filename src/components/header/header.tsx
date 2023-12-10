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
                        <Link href="/todo">todo list</Link>
                    </li>
                    <li>
                        <Link href="/react-weather">weather (react)</Link>
                    </li>
                    <li>
                        <Link href="/chart-react">chart example</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});

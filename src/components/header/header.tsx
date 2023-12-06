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
                        <Link href="/weather-today">check weather</Link>
                    </li>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <div class={"p-4 bg-primary text-white"}>
                        This is a Panda CSS component!
                    </div>
                </ul>
            </nav>
        </header>
    );
});

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/weather-today">check weather</Link>
                    </li>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});

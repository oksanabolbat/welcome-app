import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */
    const brandColor = useSignal<string>("#31A062");
    useTask$(async () => {
        const resp = await fetch("https://www.colr.org/json/color/random");
        const data = await resp.json();
        console.log(data.new_color);
        brandColor.value = data.new_color ? `#${data.new_color}` : "#31A062";
    });
    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <RouterHead />
            </head>
            <body lang="en" style={{ "--colors-brand": brandColor.value }}>
                <RouterOutlet />

                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});

import { component$, useStore, useContextProvider } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

import { type ItemProps } from "./routes/todo";
import { todoCtxId } from "./routes/todo-context";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */
    const todoItems = useStore<ItemProps[]>([
        { id: 1, status: "new", text: "test text" },
    ]);

    useContextProvider(todoCtxId, todoItems); //availiable in this component and it's childs
    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <RouterHead />
            </head>
            <body lang="en">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});

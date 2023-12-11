import { component$ } from "@builder.io/qwik";

import { QMainView } from "~/integrations/react/weather/components/MainView";

export default component$(() => {
    //return <QMainView client:load />;
    return <QMainView />;
});

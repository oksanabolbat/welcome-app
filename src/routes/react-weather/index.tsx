import { component$ } from "@builder.io/qwik";

import { QMainView } from "~/integrations/react/components/MainView";

export default component$(() => {
    return <QMainView client:load />;
});

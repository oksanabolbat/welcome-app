import { component$ } from "@builder.io/qwik";
import { QChart } from "./chart";
import { css } from "~/styled-system/css";

export default component$(() => {
    return (
        <>
            <h3>Chart example</h3>
            <div class={css({ width: "500px", height: "500px" })}>
                <QChart />
            </div>
        </>
    );
});

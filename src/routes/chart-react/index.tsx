import { component$ } from "@builder.io/qwik";
import { QChart } from "../../integrations/react/chart/chart";
import { css } from "~/styled-system/css";

export default component$(() => {
    return (
        <div
            class={css({
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
                flexGrow: 1,
            })}
        >
            <h3>Chart example</h3>
            <div
                class={css({
                    width: "100%",
                    p: "20px 10px",
                    overflow: "hidden",
                    flexGrow: 1,
                })}
            >
                <QChart />
            </div>
        </div>
    );
});

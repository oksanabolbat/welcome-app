import { component$ } from "@builder.io/qwik";
import { QChart } from "../../integrations/react/chart/chart_out";
import { css } from "~/styled-system/css";

export default component$(() => {
    return (
        <div
            class={css({
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
                flexGrow: 1,
                px: "1rem",
            })}
        >
            <h3>Chart example</h3>
            <div
                class={css({
                    width: "100%",
                    p: "2rem 1rem 4rem ",
                    overflow: "hidden",
                    flexGrow: 1,
                })}
            >
                <QChart />
            </div>
        </div>
    );
});

import { component$ } from "@builder.io/qwik";
import { TotalValueHeading } from "./TotalValueHeading";

import { css } from "~/styled-system/css";
import { QChart } from "../../integrations/react/chart/Chart";

export const TotalValue = component$(() => {
    return (
        <>
            <TotalValueHeading />
            <div
                class={css({
                    h: "20rem",
                    overflow: "hidden",
                })}
            >
                <QChart />
            </div>
        </>
    );
});

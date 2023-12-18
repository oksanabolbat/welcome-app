import { component$ } from "@builder.io/qwik";
import { TotalValueHeading } from "./TotalValueHeading";

import { QChart } from "~/integrations/react/chart/Chart";
import { css } from "~/styled-system/css";

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

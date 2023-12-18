import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { TotalValueHeading } from "./TotalValueHeading";
import { QChart } from "~/integrations/react/chart/Chart";

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

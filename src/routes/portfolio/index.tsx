import { component$ } from "@builder.io/qwik";
import { QPortfolioTable } from "~/integrations/react/portfolio/portfolio";
import { css } from "~/styled-system/css";

import { DateStringStyle, HeadingStyle } from "~/styles/recipes/text";

export default component$(() => {
    return (
        <>
            <div class={css({ px: "1.8rem" })}>
                <h2 class={HeadingStyle({ type: "secondary" })}>Portfolio</h2>
                <p class={[DateStringStyle(), css({ mb: "1.5rem" })]}>
                    01 Jan 24 - 31 Mar 2024
                </p>
            </div>
            <QPortfolioTable />
        </>
    );
});

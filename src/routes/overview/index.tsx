import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { TotalValueSummary } from "~/components/overview/total-value-summary";
import { css } from "~/styled-system/css";

export default component$(() => {
    const userName = "Jessie";
    return (
        <>
            <Header />
            <h2
                class={css({
                    fontSize: "2.125rem",
                    fontWeight: "700",
                    textAlign: "left",
                })}
            >
                Welcome, {userName}.
            </h2>
            <TotalValueSummary />
            <Footer />
        </>
    );
});

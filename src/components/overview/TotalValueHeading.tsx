import { component$, useSignal, $ } from "@builder.io/qwik";
import { TabButton } from "~/integrations/react/UI/TabButton";
import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";

interface TabStyleProps {
    type?: "tab" | "activeTab" | undefined;
}

export const TotalValueHeading = component$(() => {
    const activeTab = useSignal("year");

    const activeTabStyle: TabStyleProps = {
        type: "activeTab",
    };
    const tabStyle: TabStyleProps = {
        type: "tab",
    };

    const TAB_BUTTONS = [
        { id: "day", label: "Daily" },
        { id: "week", label: "Weekly" },
        { id: "year", label: "Annually" },
    ];
    const tabClickHandler = $((id: string) => {
        activeTab.value = id;
    });

    return (
        <div class={flex({ justifyContent: "space-between" })}>
            <div>
                <h3
                    class={css({
                        fontSize: "1.14513rem",
                        lineHeight: "1.6rem",
                        fontWeight: "700",
                    })}
                >
                    Total value
                </h3>
                <p
                    class={css({
                        fontSize: "0.625rem",
                        color: "#86909C",
                        lineHeight: "1.6rem",
                    })}
                >
                    01 Jan 24 - 24 Mar 24
                </p>
            </div>
            <div
                class={[
                    flex({
                        justifyContent: "space-between",
                        alignItems: "center",
                    }),
                    css({
                        w: "11.5rem",
                        h: "1.877rem",
                        bgColor: "#fff",
                        borderRadius: "1rem",
                        border: "0.23rem solid #fff",
                    }),
                ]}
            >
                {TAB_BUTTONS.map((el) => {
                    return (
                        <TabButton
                            key={el.id}
                            id={el.id}
                            label={el.label}
                            changeTab={tabClickHandler}
                            tabStyle={
                                activeTab.value === el.id
                                    ? activeTabStyle
                                    : tabStyle
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
});

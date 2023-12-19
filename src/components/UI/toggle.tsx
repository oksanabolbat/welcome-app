import { component$, useSignal, $ } from "@builder.io/qwik";
import { tabsHolder } from "~/styles/recipes/buttons";
import { activeTabStyle, tabStyle } from "~/styles/constants";
import { TabButton } from "~/integrations/react/UI/tab-button";
import { css } from "~/styled-system/css";

interface Props {
    buttons: { id: string; label: string }[];
    activeTab: string;
}

export const Toggle = component$((props: Props) => {
    const activeTab = useSignal(props.activeTab);
    const tabClickHandler = $((id: string) => {
        activeTab.value = id;
    });
    return (
        <div>
            <div class={[tabsHolder(), css({ justifyContent: "flex-end" })]}>
                {props.buttons.map((el) => {
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

import { component$, type QRL } from "@builder.io/qwik";
import { tabBtnStyle } from "~/styles/recipes/buttons";

interface TabStyleProps {
    type?: "tab" | "activeTab" | undefined;
}

interface Props {
    label: string;
    id: string;
    changeTab: QRL<(id: string) => void>;
    tabStyle: TabStyleProps;
    //activeTab: UseSignal;
}

export const TabButton = component$((props: Props) => {
    // const tabClickHandler = $((id: string) => {
    //     console.log(id);
    // });
    return (
        <button
            class={tabBtnStyle(props.tabStyle)}
            id={props.id}
            onClick$={(e) => {
                props.changeTab((e.target as HTMLElement).id);
            }}
        >
            {props.label}
        </button>
    );
});

export const colors = { primary: "#31A062", secondary: "#DA6682" };

interface TabStyleProps {
    type?: "tab" | "activeTab" | undefined;
}
export const activeTabStyle: TabStyleProps = {
    type: "activeTab",
};
export const tabStyle: TabStyleProps = {
    type: "tab",
};

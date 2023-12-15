import { cva } from "../../styled-system/css";

export const containerStyle = cva({
    base: {
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        w: "100%",
        justifyContent: "center",
        gap: "4.25rem",
        pb: "10.5rem",
        textAlign: "center",
    },
});

import { styled } from "../styled-system/jsx";
import { cva } from "../styled-system/css";

export const footerStyle = cva({
    base: {
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#000",
        color: "#fff",
    },
});

export const Footer = styled("footer", footerStyle);

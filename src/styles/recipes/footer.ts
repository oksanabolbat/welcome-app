import { styled } from "../../styled-system/jsx";
import { cva } from "../../styled-system/css";

export const footerStyle = cva({
    base: {
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#000",
        color: "#fff",
    },
});

export const footerIconStyle = cva({
    base: {
        color: "inherit",
        w: "100%",
        h: "100%",
        textAlign: "center",
        fontSize: "0.75rem",
        transition: "all 0.3s ease-in-out",
        _hover: {
            opacity: "0.5",
        },
    },
    variants: {
        type: {
            active: {
                color: "brand",
                opacity: "1",
            },
            notActive: {},
        },
    },
});

export const Footer = styled("footer", footerStyle);

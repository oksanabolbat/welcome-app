import { styled } from "../../styled-system/jsx";
import { cva, type RecipeVariantProps } from "../../styled-system/css";

export const buttonStyle = cva({
    base: {
        textAlign: "center",
        minWidth: "200px",
        fontFamily: "monospace",
        padding: "10px",
        borderRadius: "15px",
        cursor: "pointer",
        _hover: {
            opacity: "0.5",
        },
    },
    variants: {
        size: {
            sm: {
                fontSize: "13px",
                minWidth: "100px",
            },
            lg: {
                fontSize: "18px",
            },
        },
        color: {
            green: {
                background: "brand",
            },
            blue: {
                background: "blue.500",
            },
        },
    },
    defaultVariants: {
        size: "sm",
        color: "green",
    },
});

export const footerBtnStyle = cva({
    base: {
        cursor: "pointer",
        minW: "100px",
        maxW: "180px",
        textAlign: "center",
        color: "#fff",
        _hover: {
            opacity: "0.5",
        },
    },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>; // { size?: 'small' | 'large' }

export const Button = styled("button", buttonStyle);

import { styled } from "../../styled-system/jsx";
import { cva, type RecipeVariantProps } from "../../styled-system/css";

export const buttonStyle = cva({
    base: {
        textAlign: "center",
        w: "21rem",
        fontFamily: "monospace",
        padding: "1rem",
        borderRadius: "1.25rem",
        cursor: "pointer",
        _hover: {
            opacity: "0.5",
        },
    },
    variants: {
        size: {
            sm: {
                fontSize: "1rem",
            },
            lg: {
                fontSize: "1.5rem",
            },
        },
        color: {
            main: {
                background: "brand",
            },
            logout: {
                background: "logout",
            },
        },
    },
    defaultVariants: {
        size: "sm",
        color: "main",
    },
});

export const footerBtnStyle = cva({
    base: {
        cursor: "pointer",
        minW: "100px",
        maxW: "180px",
        textAlign: "center",
        color: "main",
        _hover: {
            opacity: "0.5",
        },
    },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>; // { size?: 'small' | 'large' }

export const Button = styled("button", buttonStyle);

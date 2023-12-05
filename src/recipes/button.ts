import { styled } from "../styled-system/jsx";
import { cva, type RecipeVariantProps } from "../styled-system/css";

export const buttonStyle = cva({
    base: {
        background: "green.500",
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
            },
            lg: {
                fontSize: "18px",
            },
        },
    },
    defaultVariants: {
        size: "sm",
    },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>; // { size?: 'small' | 'large' }

export const Button = styled("button", buttonStyle);

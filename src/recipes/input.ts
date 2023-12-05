import { styled } from "../styled-system/jsx";
import { cva, type RecipeVariantProps } from "../styled-system/css";

const inputStyle = cva({
    base: {
        minWidth: "200px",
        fontFamily: "monospace",
        padding: "5px",
        border: "1px solid #000",
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
        size: "lg",
    },
});

export type ButtonVariants = RecipeVariantProps<typeof inputStyle>; // { size?: 'small' | 'large' }

export const Input = styled("input", inputStyle);

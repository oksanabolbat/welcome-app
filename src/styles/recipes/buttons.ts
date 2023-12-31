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
                background: "account",
            },
        },

        //
        type: {
            delete: {
                borderWidth: "2px",
                bgColor: "#fff",
                borderColor: "account",
                color: "account",
                display: "block",
                m: "0 auto",
            },
            logout: {
                bgColor: "logout",
                borderColor: "#fff",
                borderWidth: "2px",
                color: "#fff",
                display: "block",
                m: "0 auto",
            },
        },
    },
    defaultVariants: {
        size: "sm",
        color: "main",
    },
});

export const tabBtnStyle = cva({
    base: {
        p: "0.4rem 0.9375rem ",
        h: "1.41731rem",

        fontSize: "0.4375rem",
        fontWeight: "600",
        lineHeight: "0.5rem",
        textAlign: "center",
        cursor: "pointer",
        borderRadius: "0.8125rem",
    },

    variants: {
        type: {
            tab: {
                color: "#9291A5",
                bgColor: "main",
            },
            activeTab: {
                bgColor: "#1E1B39",
                color: "main",
                cursor: "default",
            },
        },
    },
});

export const tabsHolder = cva({
    base: {
        h: "1.877rem",
        w: "fit-content",
        bgColor: "#fff",
        borderRadius: "1rem",
        border: "0.23rem solid #fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
    variants: {},
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>; // { size?: 'small' | 'large' }

export const Button = styled("button", buttonStyle);

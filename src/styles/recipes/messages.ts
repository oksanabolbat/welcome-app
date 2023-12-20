import { cva } from "~/styled-system/css/cva.mjs";

export const MessageStyle = cva({
    base: {
        width: "fit-content",
        maxW: "80%",
        minW: "10rem",
        bgColor: "brand",
        mb: "2rem",
        p: "0.9rem 1rem",
        borderRadius: "0.5rem",
        position: "relative",
        _after: {
            content: '" "',
            position: "absolute",

            borderTopColor: "transparent",

            borderBottomColor: "transparent",
            borderWidth: "1rem",
            borderStyle: "solid",
            left: 0,
            bottom: "-1rem",
        },
    },
    variants: {
        type: {
            send: {
                bgColor: "brand",
                color: "#fff",
                _after: {
                    borderLeftColor: "transparent",
                    borderRightColor: "brand",
                    right: 0,
                },
            },
            receive: {
                bgColor: "#fff",
                color: "#000",
                _after: {
                    borderRightColor: "transparent",
                    borderLeftColor: "#fff",
                    left: 0,
                },
            },
        },
    },
});

export const NewMessageStyle = cva({
    base: {
        w: "100%",
        minH: "3rem",
        h: "fit-content",
        p: "1rem 3.5rem 1rem 1rem",
        mb: "1rem",
        border: "1px solid #e8e8e8",
        display: "inline-block",
        borderRadius: "1.5rem",
        bgColor: "inherit",
    },
});

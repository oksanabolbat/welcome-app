import { cva } from "~/styled-system/css/cva.mjs";

export const HeadingStyle = cva({
    base: {},
    variants: {
        type: {
            secondary: {
                fontSize: "2.125rem",
                fontWeight: "700",
                textAlign: "left",
            },
        },
    },
});

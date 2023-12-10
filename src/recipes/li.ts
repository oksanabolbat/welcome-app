import { cva } from "~/styled-system/css";
import { type RecipeVariantProps } from "~/styled-system/css";

export const liStyle = cva({
    base: {
        minW: "200px",
        padding: "5px",
    },
    variants: {
        status: {
            done: {
                backgroundColor: "green.200",
            },
            new: {
                backgroundColor: "red.200",
            },
            inProgress: {
                backgroundColor: "blue.200",
            },
        },
    },
    defaultVariants: {
        status: "new",
    },
});

export type LiStyleVariants = RecipeVariantProps<typeof liStyle>;

import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    body: {
        description: "The body text style - used in paragraphs",
        value: {
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24",
            letterSpacing: "0",
            textDecoration: "None",
            textTransform: "None",
        },
    },
    headings: {
        description: "Text styles for headings",
        value: {
            fontWeight: "900",
            fontFamily: "Inter",
            fontSize: "1rem",
        },
    },
});

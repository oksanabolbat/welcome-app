import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    body: {
        description: "The body text style - used in paragraphs",
        value: {
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.3rem",
            letterSpacing: "0",
            textDecoration: "None",
            textTransform: "None",
        },
    },
    headingPrimary: {
        description: "Text styles for main headings",
        value: {
            fontWeight: "900",
            fontFamily: "Inter",
            fontSize: "2rem",
            lineHeight: "normal",
        },
    },
    headingSecondary: {
        value: {
            fontWeight: "700",
            fontSize: "1.5rem",
            //fontFamily: "Titillium Web",
            fontFamily: "Inter",
        },
    },
});

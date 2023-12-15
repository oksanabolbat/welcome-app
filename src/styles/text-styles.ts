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
    headingMain: {
        description: "Text styles for main headings",
        value: {
            fontWeight: "900",
            fontFamily: "Inter",
            fontSize: "2rem",
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
    paragraph: {
        value: {
            fontSize: "1rem",
            lineHeight: "1.3rem",
            fontWeight: "400",
            //fontFamily: "Titillium Web",
            fontFamily: "Inter",
        },
    },
});

import { defineConfig } from "@pandacss/dev";
import { textStyles } from "~/styles/text-styles";

export default defineConfig({
    jsxFramework: "qwik",

    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: {
                    brand: { value: "#31A062" },
                    login: { value: "#DA6682" },
                },
            },
        },
        textStyles: {
            textStyles,
        },
    },

    // The output directory for your css system
    outdir: "src/styled-system",
});

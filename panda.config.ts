import { defineConfig } from "@pandacss/dev";
import { textStyles } from "~/styles/text-styles";

import { colors } from "~/styles/constants";

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
                    brand: { value: colors.primary },

                    brandPrimary: { value: "#5DB075" },
                    brandSecondary: { value: "#4B9460" },
                    account: { value: colors.secondary },
                    main: { value: "#fff" },
                    mainText: { value: "#000" },
                    contentText: { value: "#4F4F4F" },
                    headingText: { value: "#1A1A1A" },
                    bgLogin: { value: "#fafafa" },
                    bgCommon: { value: "#F6F6F9" },
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

import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export default component$(() => {
    return (
        <>
            <>
                <div class="relative bg-white rounded-md w-64 h-40 shadow-md overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-primary bg-opacity-0 hover:bg-opacity-25"></div>
                    <div class="p-4 relative z-10">
                        <h2 class="text-xl font-semibold">Card Title</h2>
                        <p>This is a card with an animated hover effect.</p>
                    </div>
                </div>
            </>
            <div
                class={css({
                    padding: 10,
                    bg: "red.400",
                    height: "dvh",
                    margin: 100,
                    fontSize: 30,
                })}
            >
                This box is styled with PandaCSS.
            </div>
        </>
    );
});

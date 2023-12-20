import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

import { NewMessageStyle } from "~/styles/recipes/messages";

export const NewMessage = component$(() => {
    return (
        <div>
            <input
                type="text"
                placeholder="Message here..."
                class={NewMessageStyle()}
            />

            <div
                class={css({
                    w: "2.125rem",
                    h: "2.125rem",
                    bgColor: "brand",
                    cursor: "pointer",
                    display: "inline-block",
                    ml: "-3rem",

                    // position: "relative",
                    // top: "-4rem",
                    borderRadius: "50%",
                    position: "relative",
                    top: "0.7rem",
                })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                >
                    <circle cx="17" cy="17" r="17" fill="brand" />
                    <path
                        d="M17 10L17.7071 9.29289C17.3166 8.90237 16.6834 8.90237 16.2929 9.29289L17 10ZM21.2929 15.7071C21.6834 16.0976 22.3166 16.0976 22.7071 15.7071C23.0976 15.3166 23.0976 14.6834 22.7071 14.2929L21.2929 15.7071ZM11.2929 14.2929C10.9024 14.6834 10.9024 15.3166 11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L11.2929 14.2929ZM16 24C16 24.5523 16.4477 25 17 25C17.5523 25 18 24.5523 18 24H16ZM16.2929 10.7071L21.2929 15.7071L22.7071 14.2929L17.7071 9.29289L16.2929 10.7071ZM16.2929 9.29289L11.2929 14.2929L12.7071 15.7071L17.7071 10.7071L16.2929 9.29289ZM16 10V17H18V10H16ZM16 17V24H18V17H16Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
});

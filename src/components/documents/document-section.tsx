import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { flex } from "~/styled-system/patterns";
import { HeadingStyle } from "~/styles/recipes/text";

interface Props {
    heading: string;
    documents: { key: string; name: string; link?: string }[];
}

export const DocumentSection = component$((props: Props) => {
    return (
        <div class={css({ mb: "2.12rem" })}>
            <h4
                class={[
                    HeadingStyle({ type: "section" }),
                    css({ mb: "1.38rem" }),
                ]}
            >
                {props.heading}{" "}
            </h4>
            {props.documents.map((document) => {
                return (
                    <a
                        href={document.link || "/documents"}
                        key={document.key}
                        class={[
                            css({
                                p: "1.33rem 1.44rem 1.44rem",
                                bgColor: "#fff",
                                mb: "0.5rem",
                                borderRadius: "0.25rem",
                                boxShadow: "0px 5px 10px 0px rbga(0,0,0,0.04)",
                            }),
                            flex({ justifyContent: "space-between" }),
                        ]}
                    >
                        <p class={css({ fontWeight: "600" })}>
                            {document.name}
                        </p>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="16"
                            viewBox="0 0 8 16"
                            fill="none"
                        >
                            <path
                                d="M1 15L7 8L1 1"
                                stroke="#333333"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                );
            })}
        </div>
    );
});

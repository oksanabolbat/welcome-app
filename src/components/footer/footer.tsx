import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { footerBtnStyle } from "~/styles/recipes/button";
import { css } from "~/styled-system/css";

export const Footer = component$(() => {
    const location = useLocation();

    return (
        <>
            <footer
                class={css({
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    bottom: "0",
                    width: "100%",
                    height: "4rem",
                    color: "#fff",
                    bgColor: "#000",
                })}
            >
                <Link
                    class={[
                        footerBtnStyle(),
                        location.url.pathname === "/" &&
                            css({ opacity: "0.5" }),
                    ]}
                    href="/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="25"
                        height="25"
                        class={css({ display: "inline-block" })}
                    >
                        <path
                            d="M3,4H24V2H3C1.346,2,0,3.346,0,5v14c0,1.654,1.346,3,3,3H24V6H3c-.552,0-1-.449-1-1s.448-1,1-1Zm0,4H22v12H3c-.552,0-1-.449-1-1V7.829c.312,.111,.649,.171,1,.171Zm15,6c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <p>home</p>
                </Link>

                <Link
                    class={[
                        footerBtnStyle(),
                        location.url.pathname === "/todo/" &&
                            css({ opacity: "0.5" }),
                    ]}
                    href="/todo"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="25"
                        height="25"
                        class={css({ display: "inline-block" })}
                    >
                        <g style="fill:#fff">
                            <path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" />
                            <path
                                d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
                                fill="#ffffff"
                            />
                        </g>
                    </svg>
                    <p>todo</p>
                </Link>

                <Link
                    class={[
                        footerBtnStyle(),
                        location.url.pathname === "/react-weather/" &&
                            css({ opacity: "0.5" }),
                    ]}
                    href="/react-weather"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="25"
                        height="25"
                        class={css({ display: "inline-block" })}
                    >
                        <path
                            d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <p>weather</p>
                </Link>

                <Link
                    class={[
                        footerBtnStyle(),
                        location.url.pathname === "/chart-react/" &&
                            css({ opacity: "0.5" }),
                    ]}
                    href="/chart-react"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="25"
                        height="25"
                        class={css({ display: "inline-block" })}
                    >
                        <path
                            d="M3,22H24v2H3c-1.654,0-3-1.346-3-3V0H2V21c0,.551,.449,1,1,1ZM17,5v2h3.586l-5.586,5.586-4-4-6.707,6.707,1.414,1.414,5.293-5.293,4,4,7-7v3.586h2V5h-7Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <p>chart</p>
                </Link>
            </footer>
        </>
    );
});

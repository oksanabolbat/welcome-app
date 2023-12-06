import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { flex, hstack } from "~/styled-system/patterns";
import { circle } from "~/styled-system/patterns/circle.mjs";

export interface WeatherInfoProps {
    placeName: string;
    lastUpdated?: string;
    localTime?: string;
    tempC?: number;
    tempF?: number;
    feelsLikeC?: number;
    feelsLikeF?: number;
    conditionText?: string;
    windMph?: number;
    windKph?: number;
    humidity?: number;
    cloud?: number;
    uv?: number;
    icon?: string;
}

export default component$((props: { data: WeatherInfoProps }) => {
    return (
        <section
            class={[
                css({ m: "10px auto", maxW: "500px" }),
                flex({ justifyContent: "space-around" }),
            ]}
        >
            <div>
                <div class={hstack()}>
                    <div>
                        <h2 class={css({ fontWeight: 600 })}>
                            {props.data.placeName}
                        </h2>
                        <p class={css({ opacity: "0.5" })}>
                            {props.data.conditionText ?? ""}
                        </p>
                    </div>
                    <div class={circle({ size: 20, overflow: "hidden" })}>
                        <img
                            src={props.data.icon}
                            alt={props.data.conditionText}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>

                <p
                    class={css({
                        fontSize: "3.5rem",
                        fontWeight: 700,
                        opacity: "0.5",
                    })}
                >
                    {props.data.tempC}°C
                </p>
            </div>

            <div
                class={flex({
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                })}
            >
                <p>
                    feels like: <span>{props.data.feelsLikeC}°C</span>
                </p>
                <p>
                    wind: <span>{props.data.windKph}km/h</span>
                </p>
                <p>
                    humidity: <span>{props.data.humidity} %</span>
                </p>
                <p>
                    uv: <span>{props.data.uv}</span>
                </p>
            </div>
        </section>
    );
});

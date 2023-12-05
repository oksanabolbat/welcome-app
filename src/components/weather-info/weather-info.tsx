import { component$ } from "@builder.io/qwik";

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
}

export default component$((props: { data: WeatherInfoProps }) => {
    return (
        <section>
            <h2>{props.data.placeName}</h2>
            {props.data.conditionText ?? ""}
        </section>
    );
});

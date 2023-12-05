import { component$, useSignal, $, useTask$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

import { container } from "~/styled-system/patterns";
import { Button } from "~/recipes/button";
import { Input } from "~/recipes/input";

import WeatherInfo, {
    type WeatherInfoProps,
} from "~/components/weather-info/weather-info";

const API_KEY = "fed44a46a5434d76a6b214001230212";
const url = "https://api.weatherapi.com/v1/current.json?";
// const api_params = {
//     key: API_KEY,
//     q: "London",
// };

export const getCurrentWeather = async (
    place: string
): Promise<WeatherInfoProps> => {
    console.log("fetching data");

    const res = await fetch(
        url + new URLSearchParams({ key: API_KEY, q: place })
    );
    const data = await res.json();

    return {
        placeName: data.location.name,
        lastUpdated: data.current.last_updated,
        localTime: data.location.localtime,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        feelsLikeC: data.current.fellslike_c,
        feelsLikeF: data.current.fellslike_f,
        conditionText: data.current.condition.text,
        windMph: data.current.wind_mph,
        windKph: data.current.wind_kph,
        humidity: data.current.humidity,
        cloud: data.current.cloud,
        uv: data.current.uv,
    };
};

export default component$(() => {
    const placeNameSignal = useSignal("");
    const enteredPlaceSignal = useSignal("");
    const showPlaceWarningSignal = useSignal(false);

    const currWeatherInfoSignal = useSignal<WeatherInfoProps>({
        placeName: "",
    });

    useTask$(({ track }) => {
        track(() => enteredPlaceSignal.value);
        if (enteredPlaceSignal.value.length > 1) {
            getCurrentWeather(enteredPlaceSignal.value);
            getCurrentWeather(enteredPlaceSignal.value).then((data) => {
                const weatherInfo: WeatherInfoProps = data;

                currWeatherInfoSignal.value = weatherInfo;
            });
        }
    });

    const submitHandler = $(() => {
        if (placeNameSignal.value.trim().length > 0) {
            showPlaceWarningSignal.value = false;
            enteredPlaceSignal.value = placeNameSignal.value.trim();
        } else {
            showPlaceWarningSignal.value = true;
        }
    });

    return (
        <div
            class={container({
                maxWidth: "800px",
                margin: "20px auto",
                textAlign: "center",
            })}
        >
            <form preventdefault:submit onSubmit$={submitHandler}>
                <Input
                    type="text"
                    onChange$={(e) => {
                        placeNameSignal.value = (
                            e.target as HTMLInputElement
                        ).value;
                    }}
                />{" "}
                <Button type="submit" class={css({ margin: "10px" })} size="lg">
                    show
                </Button>
            </form>
            {showPlaceWarningSignal.value && (
                <p class={css({ color: "brown" })}>
                    Please enter some city name!
                </p>
            )}

            {currWeatherInfoSignal.value.placeName && (
                <WeatherInfo data={currWeatherInfoSignal.value} />
            )}
        </div>
    );
});

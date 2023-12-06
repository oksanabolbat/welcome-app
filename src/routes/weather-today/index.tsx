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
): Promise<WeatherInfoProps | null> => {
    const res = await fetch(
        url + new URLSearchParams({ key: API_KEY, q: place })
    );
    try {
        const data = await res.json();
        if (data) {
            return {
                placeName: data.location.name,
                lastUpdated: data.current.last_updated,
                localTime: data.location.localtime,
                tempC: data.current.temp_c,
                tempF: data.current.temp_f,
                feelsLikeC: data.current.feelslike_c,
                feelsLikeF: data.current.feelslike_f,
                conditionText: data.current.condition.text,
                windMph: data.current.wind_mph,
                windKph: data.current.wind_kph,
                humidity: data.current.humidity,
                cloud: data.current.cloud,
                uv: data.current.uv,
                icon: data.current.condition.icon,
            };
        } else {
            return null;
        }
    } catch (e) {
        console.log(e);
        return null;
    }
};

export default component$(() => {
    const placeNameSignal = useSignal("");
    const isPlaceEntered = useSignal("");
    const showPlaceWarningSignal = useSignal(false);
    const showWeather = useSignal(false);

    const currWeatherInfoSignal = useSignal<WeatherInfoProps>({
        placeName: "",
    });

    useTask$(({ track }) => {
        track(() => isPlaceEntered.value);
        if (isPlaceEntered.value.length > 1) {
            getCurrentWeather(isPlaceEntered.value).then((data) => {
                if (data) {
                    currWeatherInfoSignal.value = data;
                    showWeather.value = true;
                    console.log(currWeatherInfoSignal.value);
                } else {
                    showWeather.value = false;
                }
            });
        }
    });

    const submitHandler = $(() => {
        if (placeNameSignal.value.trim().length > 0) {
            showPlaceWarningSignal.value = false;
            isPlaceEntered.value = placeNameSignal.value.trim();
        } else {
            showPlaceWarningSignal.value = true;
        }
    });

    return (
        <div
            class={container({
                maxWidth: "550px",
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

            {currWeatherInfoSignal.value.placeName &&
                (showWeather.value ? (
                    <WeatherInfo data={currWeatherInfoSignal.value} />
                ) : (
                    <p>Sorry, something went wrong. Please enter other place</p>
                ))}
        </div>
    );
});

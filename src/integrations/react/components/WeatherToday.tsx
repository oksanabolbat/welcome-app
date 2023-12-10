/** @jsxImportSource react */
import { flex } from "~/styled-system/patterns";
import {
    type TodayWeatherProps,
    icons,
    type UnitsProps,
} from "../helpers/helpers";
import DateTime from "./DateTime";
import { css } from "~/styled-system/css";

interface Props {
    data: TodayWeatherProps;
    units: UnitsProps;
    changeUnits: () => void;
    updateCity: (city: string) => void;
}
const unitsClasses =
    "btn btn-link px-0 pt-2 text-black text-decoration-none fs-5";
const WeatherToday: React.FC<Props> = (props) => {
    return (
        <div
            className={flex({
                wrap: "wrap",
                justifyContent: "space-between",
                my: "2rem",
            })}
        >
            <div className={css({ flex: "0 0 auto", maxW: "100%" })}>
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "space-between",
                    })}
                >
                    <div className={css({ width: "25%" })}>
                        {props.data.icon && (
                            <img
                                alt={props.data.description}
                                width={"150px"}
                                height={"150px"}
                                src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                                    icons[props.data.icon][0]
                                }.png`}
                            />
                        )}
                    </div>
                    <div className={css({ textAlign: "right" })}>
                        <span
                            className={css({
                                lineHeight: "1.2",
                                fontSize: "50px",
                            })}
                        >
                            {props.data.temp}
                        </span>
                    </div>
                    <div className="col-2 ">
                        <span
                            className={`${unitsClasses} ${
                                props.units === "metric"
                                    ? " disabled opacity-100"
                                    : "opacity-50"
                            }`}
                            onClick={() => {
                                props.changeUnits();
                            }}
                        >
                            °C
                        </span>{" "}
                        <span className={unitsClasses}>|</span>
                        <span
                            className={`${unitsClasses} ${
                                props.units === "imperial"
                                    ? " disabled opacity-100"
                                    : "opacity-50"
                            }`}
                            onClick={() => {
                                props.changeUnits();
                            }}
                        >
                            °F
                        </span>
                    </div>

                    <div className={css({ width: "40%" })}>
                        <ul
                            className={css({
                                opacity: "50%",
                                mt: "1rem",
                                fontSize: "0.8em",
                            })}
                        >
                            <li className={""}>
                                <span>{props.data.description}</span>
                            </li>
                            <li>
                                Humidity: <span>{props.data.humidity}</span>%
                            </li>
                            <li>
                                Wind: <span>{props.data.wind}</span>{" "}
                                {props.units === "metric" ? "m/s" : "nmph"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-5 text-end">
                <h1
                    className={css({
                        lineHeight: "1.2",
                        fontSize: "50px",
                    })}
                >
                    {props.data.city}
                </h1>
                <ul
                    className={css({
                        fontSize: "0.8",
                        textAlign: "right",
                        opacity: "0.8",
                    })}
                >
                    <li>Last updated:</li>
                    <li>
                        <DateTime
                            date={{ date: props.data.time, format: "long" }}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WeatherToday;

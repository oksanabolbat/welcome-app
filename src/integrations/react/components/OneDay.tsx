/** @jsxImportSource react */
import DateTime from "./DateTime";
import { type UnitsProps, type DayForecastProps } from "../helpers/helpers";
import { css } from "~/styled-system/css";

interface Props {
    day: DayForecastProps;
    units: UnitsProps;
}

const OneDay: React.FC<Props> = (props) => {
    const day = props.day;
    return (
        <div className={css({ textAlign: "center" })}>
            <div className="fs-6">
                <DateTime date={{ date: day.day, format: "short" }} />
            </div>
            <div className="forecast-icon">
                <img
                    src={day.url}
                    alt={day.condition}
                    width={"80px"}
                    height={"80px"}
                />
            </div>
            <div className="forecast-temp">
                <span className="fw-bold">{Math.round(day.tempMax)} </span>
                &nbsp;{Math.round(day.tempMin)}
            </div>
            <div className="opacity-75">
                <small>
                    {day.wind} {props.units === "metric" ? "m / s" : "nmph"}
                </small>
            </div>
        </div>
    );
};

export default OneDay;

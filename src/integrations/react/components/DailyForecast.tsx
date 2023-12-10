/** @jsxImportSource react */
import OneDay from "./OneDay";
import { type DayForecastProps, type UnitsProps } from "../helpers/helpers";

import { flex } from "~/styled-system/patterns";
interface Props {
    data: DayForecastProps[];
    units: UnitsProps;
}

const DailyForecast: React.FC<Props> = (props) => {
    return (
        <div className={flex({ justifyContent: "space-between" })}>
            {props.data.map((day, i) => (
                <OneDay day={day} units={props.units} key={i} />
            ))}
        </div>
    );
};

export default DailyForecast;

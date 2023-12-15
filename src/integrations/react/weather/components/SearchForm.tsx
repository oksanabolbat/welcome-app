/** @jsxImportSource react */
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

import { getCityNameByCoords } from "../helpers/api_helpers";
import { css } from "~/styled-system/css";
import { buttonStyle } from "~/styles/recipes/button";
import { flex } from "~/styled-system/patterns";

interface Props {
    currentCity?: string;
    updateCity: (city: string) => void;
    updateWeather: (city: string) => void;
}

const SearchForm: React.FC<Props> = (props) => {
    const [currenrCity, setCurrentCity] = useState<string>(
        props.currentCity ? props.currentCity : ""
    );

    const currentPositionHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        navigator.geolocation.getCurrentPosition((position) =>
            getCityNameByCoords({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }).then((res) => {
                props.updateCity(res);
                props.updateWeather(res);
                setCurrentCity(res);
            })
        );
    };

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (currenrCity.length > 1) {
            props.updateWeather(currenrCity);
        }
    };
    return (
        <form
            className={flex({
                justifyContent: "space-around",
                columnGap: "10px",
            })}
            onSubmit={submitHandler}
        >
            <div className={css({ width: "75%" })}>
                <input
                    type="text"
                    className={css({
                        border: "1px solid #ced4da",
                        borderRadius: "0.375rem",
                        color: "#212529",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        p: "0.375rem 0.75rem",
                        w: "75%",
                        mb: "0.5rem",
                        width: "85%",
                    })}
                    placeholder="Enter a city name ..."
                    value={currenrCity}
                    onChange={(e) => setCurrentCity(e.target.value)}
                    id="city"
                />
            </div>

            <button
                type="submit"
                title="Search"
                className={buttonStyle({ color: "main" })}
            >
                OK
            </button>
            <button
                title="Your current location"
                className={buttonStyle({ color: "main" })}
                onClick={currentPositionHandler}
            >
                {/* <FontAwesomeIcon icon={faMapPin} /> */}
                <FontAwesomeIcon
                    icon={faMapPin}
                    className={css({ width: "13px" })}
                />
            </button>
        </form>
    );
};

export default SearchForm;

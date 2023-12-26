/** @jsxImportSource react */
"use client";
import { qwikify$ } from "@builder.io/qwik-react";

import { colors } from "~/styles/constants";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const DATA_VALUES = ["Value", "Benchmark"];
const data = [
    {
        name: "Jan",
        [DATA_VALUES[0]]: 0.5,
        [DATA_VALUES[1]]: 0.1,
        amt: 0.3,
    },
    {
        name: "Feb",
        [DATA_VALUES[0]]: 0.6,
        [DATA_VALUES[1]]: 0.6,
        amt: 0.6,
    },
    {
        name: "Mar",
        [DATA_VALUES[0]]: 0.5,
        [DATA_VALUES[1]]: 0.7,
        amt: 0.6,
    },
    {
        name: "Apr",
        [DATA_VALUES[0]]: 1.5,
        [DATA_VALUES[1]]: 0.5,
        amt: 1,
    },
    {
        name: "May",
        [DATA_VALUES[0]]: 0.4,
        [DATA_VALUES[1]]: 1.2,
        amt: 0.8,
    },
    {
        name: "Jun",
        [DATA_VALUES[0]]: 0.1,
        [DATA_VALUES[1]]: 1.7,
        amt: 0.9,
    },
    {
        name: "Jul",
        [DATA_VALUES[0]]: 0.7,
        [DATA_VALUES[1]]: 1.1,
        amt: 0.9,
    },
    {
        name: "Aug",
        [DATA_VALUES[0]]: 1,
        [DATA_VALUES[1]]: 1,
        amt: 1,
    },
    {
        name: "Sep",
        [DATA_VALUES[0]]: 0.9,
        [DATA_VALUES[1]]: 0.5,
        amt: 0.7,
    },
    {
        name: "Oct",
        [DATA_VALUES[0]]: 1.2,
        [DATA_VALUES[1]]: 1.3,
        amt: 1.25,
    },
    {
        name: "Nov",
        [DATA_VALUES[0]]: 0.6,
        [DATA_VALUES[1]]: 0.2,
        amt: 0.4,
    },
    {
        name: "Dec",
        [DATA_VALUES[0]]: 0.3,
        [DATA_VALUES[1]]: 0.4,
        amt: 0.35,
    },
];

const Chart = () => {
    return (
        <>
            <ResponsiveContainer
                width={"100%"}
                style={{
                    margin: "0 auto",
                    overflowY: "auto",
                    paddingBottom: "1.5rem",
                }}
            >
                <LineChart width={100} height={160} data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={-40}
                        width={1}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey={DATA_VALUES[0]}
                        stroke={"var(--colors-brand)"}
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey={DATA_VALUES[1]}
                        stroke={colors.secondary}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export const QChart = qwikify$(Chart, { eagerness: "load" });

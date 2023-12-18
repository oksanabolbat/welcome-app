/** @jsxImportSource react */
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

const data = [
    {
        name: "Jan",
        uv: 0.5,
        pv: 0.1,
        amt: 0.3,
    },
    {
        name: "Feb",
        uv: 0.6,
        pv: 0.6,
        amt: 0.6,
    },
    {
        name: "Mar",
        uv: 0.5,
        pv: 0.7,
        amt: 0.6,
    },
    {
        name: "Apr",
        uv: 1.5,
        pv: 0.5,
        amt: 1,
    },
    {
        name: "May",
        uv: 0.4,
        pv: 1.2,
        amt: 0.8,
    },
    {
        name: "Jun",
        uv: 0.1,
        pv: 1.7,
        amt: 0.9,
    },
    {
        name: "Jul",
        uv: 0.7,
        pv: 1.1,
        amt: 0.9,
    },
    {
        name: "Aug",
        uv: 1,
        pv: 1,
        amt: 1,
    },
    {
        name: "Sep",
        uv: 0.9,
        pv: 0.5,
        amt: 0.7,
    },
    {
        name: "Oct",
        uv: 1.2,
        pv: 1.3,
        amt: 1.25,
    },
    {
        name: "Nov",
        uv: 0.6,
        pv: 0.2,
        amt: 0.4,
    },
    {
        name: "Dec",
        uv: 0.3,
        pv: 0.4,
        amt: 0.35,
    },
];

const Chart = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={160}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke={colors.primary}
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke={colors.secondary}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export const QChart = qwikify$(Chart, { eagerness: "load" });

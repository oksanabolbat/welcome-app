/** @jsxImportSource react */
"use client";
import * as React from "react";
import { qwikify$ } from "@builder.io/qwik-react";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

function createData(
    name: string,
    header1: string,
    header2: string,
    header3: string,
    header4: string
) {
    return { name, header1, header2, header3, header4 };
}

const rows = [
    createData("one", "cell", "cell", "cell", "cell"),
    createData("two", "cell", "cell", "cell", "cell"),
    createData("three", "cell", "cell", "cell", "cell"),
];
const PortfolioTable = () => {
    return (
        <TableContainer
            component={Paper}
            style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                borderBottom: "1px solid var(--divider, rgba(0, 0, 0, 0.12))",
                overflow: "auto",
            }}
        >
            <Table
                sx={{ width: "100%" }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead style={{ borderLeft: "none" }}>
                    <TableRow>
                        <TableCell align="left" style={{ fontWeight: 500 }}>
                            Header
                        </TableCell>
                        <TableCell align="left" style={{ fontWeight: 500 }}>
                            Header
                        </TableCell>
                        <TableCell align="left" style={{ fontWeight: 500 }}>
                            Header
                        </TableCell>
                        <TableCell align="left" style={{ fontWeight: 500 }}>
                            Header
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="left">{row.header1}</TableCell>
                            <TableCell align="left">{row.header2}</TableCell>
                            <TableCell align="left">{row.header3}</TableCell>
                            <TableCell align="left">{row.header4}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// const PortfolioTable = () => {
//     return <div>portfolio table</div>;
// };

export const QPortfolioTable = qwikify$(PortfolioTable, { eagerness: "load" });

import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

export const useFilter = () => {
    const [page, setPage] = useState(1);
    const [price, setPrice] = useState("");
    const [pageSize, setPageSize] = useState("5");

    const handleChangeSize = (event: SelectChangeEvent) => {
        setPageSize(event.target.value);
        setPage(1);
        setPrice("");
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        setPrice(event.target.value);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return { page, pageSize, price, handleChangeSize, handleChangePage, handleChangePrice };
};

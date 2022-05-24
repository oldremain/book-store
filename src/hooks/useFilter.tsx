import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useLocation } from "react-router-dom";

export const useFilter = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState("5");

    // const location = useLocation();
    // console.log(location);

    const handleChangeSize = (event: SelectChangeEvent) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return { page, pageSize, handleChangeSize, handleChangePage };
};

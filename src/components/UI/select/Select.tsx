import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import s from "./Select.module.scss";
import { Box, Stack } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setPage, setPageSize } from "../../../features/filter/filterSlice";

// interface ISelectProps {
//     pageSize: string;
//     // priceOrder: string;
//     handleChangeSize: (event: SelectChangeEvent) => void;
//     // handleChangePrice: (event: SelectChangeEvent) => void;
// }

const SelectControl: React.FC = () => {
    const dispatch = useAppDispatch();
    const { pageSize } = useAppSelector((state) => state.filter);

    const handleChangeSize = (event: SelectChangeEvent) => {
        dispatch(setPageSize(event.target.value));
        dispatch(setPage(1));
    };

    return (
        <>
            <FormControl sx={{ minWidth: 120 }} size="small" className={s.select}>
                <InputLabel id="qtyLabel">Show</InputLabel>
                <Select
                    labelId="qtyLabel"
                    id="Quantity"
                    value={pageSize}
                    onChange={handleChangeSize}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </FormControl>
            {/* <FormControl sx={{ minWidth: 120 }} size="small" className={s.select}>
                <InputLabel id="sortLabel">Sort by price</InputLabel>
                <Select
                    labelId="sortLabel"
                    id="Sort"
                    value={priceOrder}
                    onChange={handleChangePrice}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"asc"}>
                        Price <ArrowUpwardIcon sx={{ ml: "10px", fontSize: "15px" }} />
                    </MenuItem>
                    <MenuItem value={"desc"}>
                        Price <ArrowDownwardIcon sx={{ ml: "10px", fontSize: "15px" }} />
                    </MenuItem>
                </Select>
            </FormControl> */}
        </>
    );
};

export default SelectControl;

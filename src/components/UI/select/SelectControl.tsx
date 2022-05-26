import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import s from "./SelectControl.module.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
    PriceOrder,
    setPage,
    setPageSize,
    sortByPrice,
} from "../../../features/filter/filterSlice";
import { IBook } from "../../main/booksPage/bookCard/BookCard";

interface ISelectProps {
    newBooks: IBook[];
    priceOrder: string;
    pageSize: string;
}

const SelectControl: React.FC<ISelectProps> = ({ newBooks, priceOrder, pageSize }) => {
    const dispatch = useAppDispatch();

    const handleChangeSize = (event: SelectChangeEvent) => {
        dispatch(setPageSize(event.target.value));
        dispatch(setPage(1));
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        dispatch(setPage(1));
        dispatch(sortByPrice({ priceOrder: event.target.value, books: newBooks }));
    };

    return (
        <>
            <FormControl sx={{ minWidth: 120 }} size="small" className={s.select}>
                <InputLabel id="qty-label">Show</InputLabel>
                <Select
                    labelId="qty-label"
                    id="quantity"
                    label="quantity"
                    value={pageSize}
                    onChange={handleChangeSize}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }} size="small" className={s.select}>
                <InputLabel id="sort-label">Sort by price</InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort"
                    label="sort"
                    value={priceOrder}
                    onChange={handleChangePrice}
                >
                    <MenuItem value={PriceOrder.NONE}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={PriceOrder.ASC}>
                        ASC <ArrowUpwardIcon sx={{ ml: "10px", fontSize: "15px" }} />
                    </MenuItem>
                    <MenuItem value={PriceOrder.DESC}>
                        DESC <ArrowDownwardIcon sx={{ ml: "10px", fontSize: "15px" }} />
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default SelectControl;

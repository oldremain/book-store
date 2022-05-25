import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import s from "./Select.module.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setPage, setPageSize, sortByPrice } from "../../../features/filter/filterSlice";
import { IBook } from "../../main/booksPage/bookCard/BookCard";

interface ISelectProps {
    newfetchBooks: IBook[];
}

const SelectControl: React.FC<ISelectProps> = ({ newfetchBooks }) => {
    const dispatch = useAppDispatch();
    const { pageSize, filterPrice, newBooks } = useAppSelector((state) => state.filter);

    const handleChangeSize = (event: SelectChangeEvent) => {
        dispatch(setPageSize(event.target.value));
        dispatch(setPage(1));
        // dispatch(sortByPrice("none"));
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        dispatch(setPage(1));
        dispatch(sortByPrice({ value: event.target.value, books: newfetchBooks }));
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
            <FormControl sx={{ minWidth: 120 }} size="small" className={s.select}>
                <InputLabel id="sortLabel">Sort by price</InputLabel>
                <Select
                    labelId="sortLabel"
                    id="Sort"
                    value={filterPrice}
                    onChange={handleChangePrice}
                >
                    <MenuItem value="none">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"asc"}>
                        ASC <ArrowUpwardIcon sx={{ ml: "10px", fontSize: "15px" }} />
                    </MenuItem>
                    <MenuItem value={"desc"}>
                        DESC <ArrowDownwardIcon sx={{ ml: "10px", fontSize: "15px" }} />
                    </MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default SelectControl;

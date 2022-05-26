import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { setPage, setPageSize, sortByPrice } from "../../../features/filter/filterSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { IBook } from "../../main/booksPage/bookCard/BookCard";

import s from "./SelectControl.module.scss";

interface ISelectSize {
    newBooks: IBook[];
    priceOrder: string;
    pageSize: string;
    handleChangeSize: (event: SelectChangeEvent) => void;
}

const SelectSize: React.FC<ISelectSize> = ({ pageSize, handleChangeSize, newBooks }) => {
    const dispatch = useAppDispatch();

    // const handleChangeSize = (event: SelectChangeEvent) => {
    //     dispatch(setPageSize(event.target.value));
    //     dispatch(setPage(1));
    // };
    return (
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
    );
};

export default SelectSize;

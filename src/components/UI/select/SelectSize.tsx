import React from "react";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import s from "./SelectControl.module.scss";

interface ISelectSize {
    pageSize: string;
    handleChangeSize: (event: SelectChangeEvent) => void;
}

const SelectSize: React.FC<ISelectSize> = ({ pageSize, handleChangeSize }) => {
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

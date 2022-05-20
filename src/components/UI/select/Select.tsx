import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import s from "./Select.module.scss";

interface ISelectProps {
    pageSize: string;
    handleChange: (event: SelectChangeEvent) => void;
}

const SelectControl: React.FC<ISelectProps> = ({ pageSize, handleChange }) => {
    return (
        <FormControl sx={{ minWidth: 120 }} size="small" className={s.select}>
            <InputLabel id="Quantity">Show</InputLabel>
            <Select
                labelId="Quantity"
                id="Quantity"
                value={pageSize}
                label="Quantity"
                onChange={handleChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectControl;

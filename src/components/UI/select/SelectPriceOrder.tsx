import React from "react";
import { PriceOrder } from "../../../enums/enums";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import s from "./SelectControl.module.scss";

interface ISelectPriceOrder {
    priceOrder: string;
    handleChangePrice: (event: SelectChangeEvent) => void;
}

const SelectControl: React.FC<ISelectPriceOrder> = ({ priceOrder, handleChangePrice }) => {
    return (
        <>
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

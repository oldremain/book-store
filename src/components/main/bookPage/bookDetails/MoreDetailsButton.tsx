import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import s from "./BookDetails.module.scss";

interface IMoreDetailsButton {
    open: boolean;
    handleClick: () => void;
}

const MoreDetailsButton: React.FC<IMoreDetailsButton> = ({ open, handleClick }) => {
    return (
        <button className={s.more_details_btn} onClick={handleClick}>
            More details{" "}
            {open ? (
                <KeyboardArrowUpIcon fontSize="small" />
            ) : (
                <KeyboardArrowDownIcon fontSize="small" />
            )}
        </button>
    );
};

export default MoreDetailsButton;

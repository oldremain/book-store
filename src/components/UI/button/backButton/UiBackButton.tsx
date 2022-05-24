import React from "react";

import { ReactComponent as ArrowBackIcon } from "../../../../assets/cardIcons/ArrowBack.svg";

import s from "./UiBackButton.module.scss";

interface IBackButton {
    onClick?: () => void;
}

const UIBackButton: React.FC<IBackButton> = ({ onClick }) => {
    return (
        <button className={s.back_btn} onClick={onClick}>
            <ArrowBackIcon />
        </button>
    );
};

export default UIBackButton;

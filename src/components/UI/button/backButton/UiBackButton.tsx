import React from "react";

import { ReactComponent as ArrowBackIcon } from "../../../../assets/cardIcons/ArrowBack.svg";

import s from "./UiBackButton.module.scss";

const BackButton: React.FC = () => {
    return (
        <button className={s.back_btn}>
            <ArrowBackIcon />
        </button>
    );
};

export default BackButton;

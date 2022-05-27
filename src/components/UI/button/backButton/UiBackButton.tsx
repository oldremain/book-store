import path from "path";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowBackIcon } from "../../../../assets/cardIcons/ArrowBack.svg";

import s from "./UiBackButton.module.scss";

interface IBackButton {
    backTo?: string;
}

const UIBackButton: React.FC<IBackButton> = ({ backTo }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (backTo) {
            navigate(`${backTo}`);
        } else {
            navigate(-1);
        }
    };

    return (
        <div>
            <button className={s.back_btn} onClick={handleBackClick}>
                <ArrowBackIcon />
            </button>
        </div>
    );
};

export default UIBackButton;

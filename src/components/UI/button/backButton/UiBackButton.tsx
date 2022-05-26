import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowBackIcon } from "../../../../assets/cardIcons/ArrowBack.svg";

import s from "./UiBackButton.module.scss";

// interface IBackButton {
//     onClick?: () => void;
// }

const UIBackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/new/1");
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

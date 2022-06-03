import React from "react";
import cn from "classnames";

import s from "./UiPrimaryButton.module.scss";

interface IButtonProps {
    cNameBtn?: string;
    cNameLink?: string;
    text: string;
    path?: string;
    handleClick?: () => void
}

const UIPrimaryButton: React.FC<IButtonProps> = ({ cNameBtn = "", text, handleClick }) => {
    return (
        <div className={cn(s.ui_btn_container, s[cNameBtn])}>
            <button className={s.ui_btn} onClick={handleClick}>
                {text}
            </button>
        </div>
    );
};

export default UIPrimaryButton;

import React from "react";
import cn from "classnames";

import s from "./UiButton.module.scss";

interface IButtonProps {
    cNameBtn?: string;
    cNameLink?: string;
    text: string;
    path?: string;
}

const UIButton: React.FC<IButtonProps> = ({ cNameBtn = "", text }) => {
    return (
        <div className={cn(s.ui_btn, s[cNameBtn])}>
            <a href="#" className={s.ui_btn_link}>
                {text}
            </a>
        </div>
    );
};

export default UIButton;

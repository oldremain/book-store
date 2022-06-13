import React from "react";
import cn from "classnames";

import s from "./UiPrimaryButton.module.scss";

interface IButtonProps {
    cNameBtn?: string;
    //cNameLink?: string;
    text: string;
    type?: 'button' | 'submit';
    //path?: string;
    isValidPrice?: boolean;
    onClick?: (e: React.FormEvent<EventTarget>) => void
}

const UIPrimaryButton: React.FC<IButtonProps> = ({ cNameBtn = "", text, isValidPrice = true, type = 'button', onClick }) => {
    return (
        <div className={cn(s.ui_btn_container, s[cNameBtn])}>
            <button 
                type={type}
                className={cn(s.ui_btn, {[s._disabled]: !isValidPrice})} 
                onClick={onClick} 
                disabled={!isValidPrice}
            >
                {text}
            </button>
        </div>
    );
};

export default UIPrimaryButton;

import React, { useEffect, useRef } from "react";
import cn from "classnames";

import s from "./UiPrimaryButton.module.scss";

interface IButtonProps {
    cNameBtn?: string;
    cNameLink?: string;
    text: string;
    path?: string;
    price?: string;
    handleClick?: () => void
}

const UIPrimaryButton: React.FC<IButtonProps> = ({ cNameBtn = "", text, price, handleClick }) => {
    const isValidPrice = useRef<boolean>(true)

    if (price) {
        isValidPrice.current = !!(+price.slice(1))
    }

    return (
        <div className={cn(s.ui_btn_container, s[cNameBtn])}>
            <button 
                className={cn(s.ui_btn, {[s._disabled]: !isValidPrice.current})} 
                onClick={handleClick} 
                disabled={!isValidPrice.current}
            >
                {text}
            </button>
        </div>
    );
};

export default UIPrimaryButton;

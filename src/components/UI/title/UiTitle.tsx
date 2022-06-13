import React from "react";
import cn from "classnames";

import { UISize } from "../../../enums/enums";

import s from "./UiTitle.module.scss";

interface ITitleProps {
    size: UISize;
    children: React.ReactNode;
    cName?: string;
}

const UITitle: React.FC<ITitleProps> = ({ size, children, cName = "" }) => {
    return (
        <h2 className={cn(s.title, s[cName])}>
            <span className={cn(s[`text_${size}`], s.text)}>
                {children}
            </span>
        </h2>
    );
};

export default UITitle;

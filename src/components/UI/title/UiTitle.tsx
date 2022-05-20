import React from "react";
import cn from "classnames";

import { UITitleSize } from "../../../enums/enums";

import s from "./UiTitle.module.scss";

interface ITitleProps {
    size: UITitleSize;
    children: React.ReactNode;
    cName?: string;
}

const Title: React.FC<ITitleProps> = ({ size, children, cName = "" }) => {
    return (
        <div className={cn(s.title, s[cName])}>
            <span className={cn(s[`text_${size}`], s.text)}>{children}</span>
        </div>
    );
};

export default Title;

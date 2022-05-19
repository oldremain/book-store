import React from "react";
import cn from "classnames";

import { UITitleSize } from "../../../enums/enums";

import s from "./UiTitle.module.scss";

interface ITitleProps {
    size: UITitleSize;
    children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ size, children }) => {
    return (
        <div className={s.title}>
            <span className={cn(s[`text_${size}`], s.text)}>{children}</span>
        </div>
    );
};

export default Title;

import React from "react";
import cn from "classnames";

import { UISize } from "../../../enums/enums";

import s from "./UITitle.module.scss";

interface ITitleProps {
    size: UISize;
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

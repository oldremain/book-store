import React from "react";

import s from "./Title.module.scss";

interface ITitleProps {
    size: string;
}

const Title: React.FC<ITitleProps> = ({ size }) => {
    return (
        <div className={s.title}>
            <span className={`${s.text}_${size}`}>Title</span>
        </div>
    );
};

export default Title;

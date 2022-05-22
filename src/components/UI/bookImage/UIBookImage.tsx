import React from "react";
import cn from "classnames";

import { UISize } from "../../../enums/enums";

import s from "./UIBookImage.module.scss";

export interface IBookImageProps {
    size: UISize;
    theme: "blue" | "orange";
    image: string;
}

const UiBookImage: React.FC<IBookImageProps> = ({ size, theme, image }) => {
    return (
        <div className={cn(s.book_image, s[`image_${size}`], s[`bg_${theme}`])}>
            <img src={image} alt="it-book-image" />
        </div>
    );
};

export default UiBookImage;

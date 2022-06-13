import React, { useEffect, useState } from "react";
import cn from "classnames";

import { UISize } from "../../../enums/enums";

import s from "./UIBookImage.module.scss";

export interface IBookImageProps {
    size: UISize;
    theme: "blue" | "orange";
    image: string;
    cName?: string
}

const UiBookImage: React.FC<IBookImageProps> = ({ size, theme, image: src, cName = '' }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setLoaded(true)
        }
    }, [src])

    return (
        <div className={cn(s.book_image, s[`image_${size}`], s[`bg_${theme}`], s[cName])}>
            {loaded 
                ? 
                    <img src={src} alt="it-book-image" /> 
                : 
                    <div className={s.image_placeholder}></div>
            }
        </div>
    );
};

export default UiBookImage;

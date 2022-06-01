import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import UITitle from "../title/UiTitle";
import UIBookImage from "../bookImage/UIBookImage";
import UiBookRates from "../bookRates/UIBookRates";
import { UISize } from "../../../enums/enums";

import s from "./UiBookCard.module.scss";

interface IBookCard {
    cName?: string;
    image: string;
    title: string;
    subtitle: string;
    price: string;
    isbn13: string;
}

const UiBookCard: React.FC<IBookCard> = ({ image, title, subtitle, price, isbn13, cName = ''}) => {
    return (
        <Link to={`/books/${isbn13}`} className={cn(s.book_card, s[cName])}>
            <UIBookImage size={UISize.Medium} theme="blue" image={image} cName={cName}/>
            <div className={s.book_details}>
                <div className={s.book_about}>
                    <UITitle size={UISize.Small}>
                        {title.length > 45 ? title.slice(0, 45) + "..." : title}
                    </UITitle>
                    {subtitle && 
                        <div className={s.subtitle}>
                            <span>{subtitle}</span>
                        </div>}
                </div>
                <UiBookRates price={price} isbn13={isbn13} />
            </div>
        </Link>
    );
};

export default UiBookCard;

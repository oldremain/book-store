import React from "react";

import UITitle from "../../../UI/title/UiTitle";
import UIBookImage from "../../../UI/bookImage/UIBookImage";
import UiBookRates from "../../../UI/bookRates/UIBookRates";
import { UISize } from "../../../../enums/enums";

import s from "./BookCard.module.scss";

export interface IBookProps {
    image: string;
    title: string;
    subtitle: string;
    price: string;
    isbn13: string;
    url: string;
}

const BookCard: React.FC<IBookProps> = ({ image, title, subtitle, price, isbn13 }) => {
    return (
        <div className={s.book_card}>
            <UIBookImage size={UISize.Medium} theme="blue" image={image} />
            {/* <div className={s.book_image}>
                <img src={image} alt="card-image" />
            </div> */}
            <div className={s.book_details}>
                <div className={s.book_about}>
                    <UITitle size={UISize.Small}>
                        {title.length > 45 ? title.slice(0, 45) + "..." : title}
                    </UITitle>
                    <div className={s.subtitle}>
                        <span>{subtitle}</span>
                    </div>
                </div>
                <UiBookRates price={price} isbn={isbn13} />
                {/* <div className={s.book_rates}>
                    <div className={s.price}>
                        <span>{price} </span>
                    </div>
                    <div className={s.isbn}>
                        <span>ISBN: {isbn13}</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default BookCard;

import React from "react";

import UiTitle from "../../../UI/title/UiTitle";
import { UITitleSize } from "../../../../enums/enums";

import s from "./BookCard.module.scss";

export interface IBookType {
    image: string;
    title: string;
    subtitle: string;
    price: string;
    isbn13: string;
    url: string;
}

const BookCard: React.FC<IBookType> = ({ image, title, subtitle, price, isbn13 }) => {
    return (
        <div className={s.book_card}>
            <div className={s.book_image}>
                <img src={image} alt="card-image" />
            </div>
            <div className={s.book_details}>
                <UiTitle size={UITitleSize.Small}>{title}</UiTitle>
                <div className={s.subtitle}>
                    <span>{subtitle}</span>
                </div>
                <div className={s.book_rates}>
                    <div className={s.price}>
                        <span>{price} </span>
                    </div>
                    <div className={s.isbn}>
                        <span>ISBN: {isbn13}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;

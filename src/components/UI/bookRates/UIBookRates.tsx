import React from "react";

import s from "./UIBookRates.module.scss";

interface IBookRatesProps {
    price: string;
    isbn13: string;
}

const UIBookRates: React.FC<IBookRatesProps> = ({ price, isbn13 }) => {
    return (
        <div className={s.book_rates}>
            <div className={s.price}>
                <span>{price} </span>
            </div>
            <div className={s.isbn}>
                <span>ISBN: {isbn13}</span>
            </div>
        </div>
    );
};

export default UIBookRates;

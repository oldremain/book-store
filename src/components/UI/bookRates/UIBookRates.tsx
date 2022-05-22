import React from "react";
import cn from "classnames";

import s from "./UIBookRates.module.scss";

export interface IBookRatesProps {
    cName?: string;
    price: string;
    isbn: string;
}

const UIBookRates: React.FC<IBookRatesProps> = ({ price, isbn, cName = "" }) => {
    return (
        <div className={cn(s.book_rates, s[cName])}>
            <div className={s.price}>
                <span>{price} </span>
            </div>
            <div className={s.isbn}>
                <span>ISBN: {isbn}</span>
            </div>
        </div>
    );
};

export default UIBookRates;

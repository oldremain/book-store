import React from "react";
import cn from "classnames/bind";

import s from "./UIBookRates.module.scss";

export interface IBookRatesProps {
    cName?: string;
    price: string;
    isbn13: string;
}

const UIBookRates: React.FC<IBookRatesProps> = ({ price, isbn13, cName = "" }) => {
    const finalPrice = +price.slice(1) === 0 ? "( out of store )" : price;

    return (
        <div className={cn(s.book_rates, s[cName])}>
            <div
                className={cn(s.price, { [s.price_absent]: +price.slice(1) === 0 ? true : false })}
            >
                <span>{finalPrice} </span>
            </div>
            <div className={s.isbn}>
                <span>ISBN: {isbn13}</span>
            </div>
        </div>
    );
};

export default UIBookRates;

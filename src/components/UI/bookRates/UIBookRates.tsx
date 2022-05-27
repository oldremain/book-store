import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import cn from "classnames";

import s from "./UIBookRates.module.scss";

export interface IBookRatesProps {
    cName?: string;
}

const UIBookRates: React.FC<IBookRatesProps> = ({ cName = "" }) => {
    const { price, isbn13 } = useAppSelector((state) => state.oneBook.book);

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

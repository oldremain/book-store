import React, { useEffect, useRef, useState } from "react";
import _isEmpty from "lodash.isempty";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

import DetailsList from "./DetailsList";
import MoreDetailsList from "./MoreDetailsList";
import UIBookRates from "../../../UI/bookRates/UIBookRates";
import UIPrimaryButton from "../../../UI/button/UiPrimaryButton";
import PreviewBook from "./PreviewBook";

import { UISize } from "../../../../enums/enums";

import s from "./BookDetails.module.scss";
import { addProduct, ICart } from "../../../../features/cart/cartSlice";

const BookDetails: React.FC = () => {
    const { price, isbn13, title, subtitle, image  } = useAppSelector((state) => state.oneBook.book);
    const preview = useAppSelector((state) => state.oneBook.book.pdf); //объект со ссылками
    const isEmptyPreview = _isEmpty(preview); // проверка что не пустой

    const dispatch = useAppDispatch()

    const preparedData = useRef<ICart>({})
    preparedData.current[isbn13] = {
        image, 
        title, 
        subtitle, 
        price, 
        isbn13
    }

    const handleCartClick = () => {
        dispatch(addProduct( preparedData.current))
    }

    return (
        <div className={s.details_container}>
            <div className={s.details}>
                <UIBookRates cName={`_${UISize.Large}`} price={price} isbn13={isbn13} />
                <DetailsList />
                <MoreDetailsList />
            </div>
            <UIPrimaryButton text="Add to cart" cNameBtn="ui_btn_bookDetails" handleClick={handleCartClick}/>
            {preview && !isEmptyPreview && <PreviewBook preview={Object.values(preview)[0]} />}
            {/* если не пустой берем первую ссылку */}
        </div>
    );
};

export default BookDetails;

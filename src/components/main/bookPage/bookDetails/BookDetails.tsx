import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { addProduct } from "../../../../features/cart/cartSlice";
import { ICartBook } from "../../../../features/cart/types";
import _isEmpty from "lodash.isempty";

import DetailsList from "./DetailsList";
import MoreDetailsList from "./MoreDetailsList";
import UIBookRates from "../../../UI/bookRates/UIBookRates";
import UIPrimaryButton from "../../../UI/button/UiPrimaryButton";
import PreviewBook from "./PreviewBook";

import { UISize } from "../../../../enums/enums";

import s from "./BookDetails.module.scss";

const BookDetails: React.FC = () => {
  const { price, isbn13, title, subtitle, image } = useAppSelector(
    (state) => state.oneBook.book
  );
  const preview = useAppSelector((state) => state.oneBook.book.pdf); //объект со ссылками
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  const isEmptyPreview = _isEmpty(preview); // проверка что не пустой

  const dispatch = useAppDispatch();

  const isValidPrice = useRef(true);
  isValidPrice.current = !!+price.slice(1);

  const preparedData = useRef<ICartBook>({});
  preparedData.current[isbn13] = {
    image,
    title,
    subtitle,
    price,
    isbn13,
  };

  const handleCartClick = () => {
    // if (isLogged) {
    //     dispatch(addProduct(preparedData.current))
    // } else {
    //     navigate('/account/auth')
    // }
    //For testing purposes only
    dispatch(addProduct(preparedData.current));
  };

  return (
    <div className={s.details_container}>
      <div className={s.details}>
        <UIBookRates cName={`_${UISize.Large}`} price={price} isbn13={isbn13} />
        <DetailsList />
        <MoreDetailsList />
      </div>
      <UIPrimaryButton
        text="Add to cart"
        cNameBtn="ui_btn_bookDetails"
        isValidPrice={isValidPrice.current}
        onClick={handleCartClick}
      />
      {preview && !isEmptyPreview && (
        <PreviewBook preview={Object.values(preview)[0]} />
      )}
      {/* если не пустой берем первую ссылку */}
    </div>
  );
};

export default BookDetails;

import React from "react";

import DetailsList from "./DetailsList";
import MoreDetailsList from "./MoreDetailsList";
import UIBookRates from "../../../UI/bookRates/UIBookRates";
import UIPrimaryButton from "../../../UI/button/UiPrimaryButton";

import { UISize } from "../../../../enums/enums";

import s from "./BookDetails.module.scss";
import PreviewBook from "./PreviewBook";
import { useAppSelector } from "../../../../hooks/reduxHooks";

const BookDetails: React.FC = () => {
    const preview = useAppSelector((state) => state.oneBook.book.pdf);

    //const path = linkPreview && Object.values(linkPreview)[0];

    return (
        <div className={s.details_container}>
            <div className={s.details}>
                <UIBookRates cName={`_${UISize.Large}`} />
                <DetailsList />
                <MoreDetailsList />
            </div>
            <UIPrimaryButton text="Add to cart" cNameBtn="ui_btn_bookDetails" />
            {preview && <PreviewBook preview={Object.values(preview)[0]} />}
        </div>
    );
};

export default BookDetails;

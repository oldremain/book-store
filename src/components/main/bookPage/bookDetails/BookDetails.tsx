import React from "react";

import DetailsList from "./DetailsList";
import MoreDetailsList from "./MoreDetailsList";
import UIBookRates from "../../../UI/bookRates/UIBookRates";
import UIPrimaryButton from "../../../UI/button/UiPrimaryButton";

import { UISize } from "../../../../enums/enums";

import s from "./BookDetails.module.scss";

const BookDetails: React.FC = () => {
    return (
        <div className={s.details_container}>
            <div className={s.details}>
                <UIBookRates cName={`_${UISize.Large}`} />
                <DetailsList />
                <MoreDetailsList />
                <UIPrimaryButton text="Add to cart" />
            </div>
        </div>
    );
};

export default BookDetails;

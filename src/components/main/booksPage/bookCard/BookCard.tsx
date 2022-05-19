import React from "react";

import UiTitle from "../../../UI/title/UiTitle";
import { UITitleSize } from "../../../../enums/enums";

import s from "./BookCard.module.scss";

const BookCard: React.FC = () => {
    return (
        <div className={s.book_card}>
            <div className={s.book_image}>
                <img src="https://itbook.store/img/books/9781491954249.png" alt="card-image" />
            </div>
            <div className={s.book_details}>
                <UiTitle size={UITitleSize.Small}>Designing Across Senses </UiTitle>
                <div className={s.subtitle}>
                    <span>A Multimodal Approach to Product Design</span>
                </div>
                <div className={s.book_rates}>
                    <div className={s.price}>
                        <span>$31.38 </span>
                    </div>
                    <div className={s.isbn}>
                        <span>ISBN: 9781491954249</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;

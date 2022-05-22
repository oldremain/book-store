import React from "react";

import { ReactComponent as ArrowBackIcon } from "../../../assets/cardIcons/ArrowBack.svg";
import UITitle from "../../UI/title/UITitle";
import UIBookImage from "../../UI/bookImage/UIBookImage";

import { UISize } from "../../../enums/enums";

import s from "./BookPage.module.scss";

const BookPage: React.FC = () => {
    return (
        <section className={s.page_containter}>
            <button className={s.back_btn}>
                <ArrowBackIcon />
            </button>
            <h2>
                <UITitle
                    size={UISize.Large}
                    children="Robot Operating System (ROS) for Absolute Beginners, 2nd Edition"
                />
            </h2>
            <div className={s.book_content}>
                <UIBookImage
                    size={UISize.Medium}
                    theme="orange"
                    image="https://itbook.store/img/books/9781484206485.png"
                />
            </div>
        </section>
    );
};

export default BookPage;

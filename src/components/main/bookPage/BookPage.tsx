import React from "react";

import BookDetails from "./bookDetails/BookDetails";
import UIBackButton from "../../UI/button/backButton/UiBackButton";
import UITitle from "../../UI/title/UiTitle";
import UIBookImage from "../../UI/bookImage/UIBookImage";

import { UISize } from "../../../enums/enums";

import s from "./BookPage.module.scss";

const BookPage: React.FC = () => {
    return (
        <section className={s.containter}>
            <UIBackButton />
            <h2 className={s.title}>
                <UITitle
                    size={UISize.Large}
                    children="Robot Operating System (ROS) for Absolute Beginners, 2nd Edition"
                />
            </h2>
            <div className={s.content}>
                <div className={s.content_image}>
                    <UIBookImage
                        size={UISize.Large}
                        theme="orange"
                        image="https://itbook.store/img/books/9781484206485.png"
                    />
                </div>
                <BookDetails price="$32.04" isbn="9781484206485" />
            </div>
        </section>
    );
};

export default BookPage;

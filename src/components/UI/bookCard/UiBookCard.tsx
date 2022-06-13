import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import UITitle from "../title/UiTitle";
import UIBookImage from "../bookImage/UIBookImage";
import UiBookRates from "../bookRates/UIBookRates";
import CartCounter from "../../main/cart/cartCounter/CartCounter";

import { UISize } from "../../../enums/enums";

import s from "./UiBookCard.module.scss";

interface IBookCard {
    cName?: string;
    image: string;
    title: string;
    subtitle: string;
    price: string;
    isbn13: string;
    children?: React.ReactNode
    onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const UiBookCard: React.FC<IBookCard> = ({ 
    image, 
    title, 
    subtitle, 
    price, 
    isbn13, 
    cName = '', 
    onLinkClick,
    onButtonClick, 
    children, 
}) => {

    return (
        <div className={s.card_container}>
            <Link to={`/books/${isbn13}`} className={cn(s.card, s[cName])} onClick={onLinkClick}>
                <UIBookImage size={UISize.Medium} theme="blue" image={image} cName={cName}/>
                <div className={s.book_details}>
                    <div className={s.book_about}>
                        <UITitle size={UISize.Small}>
                            {title.length > 45 ? title.slice(0, 45) + "..." : title}
                        </UITitle>
                        {subtitle && 
                            <div className={s.subtitle}>
                                <span>{subtitle}</span>
                            </div>}
                    </div>
                    <UiBookRates price={price} isbn13={isbn13} cName={cName}/>

                    {cName === 'card__store' && 
                        <CartCounter 
                            cName={cName} 
                            isbn13={isbn13}
                    />}
                </div>
            </Link>

            {!!children && 
                <>
                    <button className={s.clear_button} onClick={onButtonClick}>
                        { children }
                    </button>
                </>
            }
            
        </div>
    );
};

export default UiBookCard;

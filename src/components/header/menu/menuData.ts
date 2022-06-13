import { FunctionComponent } from "react";

import { ReactComponent as FavouritesIcon } from "../../../assets/FavouritesIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/UserIcon.svg";

interface MenuDataType {
    id: number;
    title: string;
    path: string;
    cName: string;
    icon: FunctionComponent;
};

export const menuData: MenuDataType[] = [
    {   id: 1,
        title: "Favourites", 
        path: "/favourites", 
        cName: "fav_link", 
        icon: FavouritesIcon 
    },
    {
        id: 2,
        title: "Cart",
        path: "/cart",
        cName: "cart_link",
        icon: CartIcon,
    },
    {
        id: 3,
        title: "Account",
        path: "/account",
        cName: "acc_link",
        icon: UserIcon,
    },
];

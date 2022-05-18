import { FunctionComponent } from "react";

import { ReactComponent as FavouritesIcon } from "../../../assets/headerIcons/FavouritesIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/headerIcons/UserIcon.svg";

type MenuDataType = {
    title: string;
    path: string;
    cName: string;
    icon: FunctionComponent;
};

export const menuData: MenuDataType[] = [
    { title: "Favourites", path: "/favourites", cName: "menu_link", icon: FavouritesIcon },
    {
        title: "Cart",
        path: "/cart",
        cName: "menu_link",
        icon: CartIcon,
    },
    {
        title: "Account",
        path: "/account",
        cName: "menu_link",
        icon: UserIcon,
    },
];

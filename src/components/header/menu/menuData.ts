import { FunctionComponent } from "react";

import { ReactComponent as FavouritesIcon } from "../../../assets/headerIcons/FavouritesIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/headerIcons/CartIcon.svg";
import { ReactComponent as UserIcon } from "../../../assets/headerIcons/UserIcon.svg";

type MenuDataType = {
    path: string;
    cName: string;
    icon: FunctionComponent;
};

export const menuData: MenuDataType[] = [
    {
        path: "/favourites",
        cName: "menu_link",
        icon: FavouritesIcon,
    },
    {
        path: "/cart",
        cName: "menu_link",
        icon: CartIcon,
    },
    {
        path: "/account",
        cName: "menu_link",
        icon: UserIcon,
    },
];

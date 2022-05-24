import React from "react";
import { Outlet } from "react-router-dom";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <main id={s.main}>
            <Outlet />
        </main>
    );
};

export default Main;

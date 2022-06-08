import React from "react";

import s from "./Main.module.scss";

interface IMainProps {
    children: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
    return (
        <main id={s.main}>
            {children}
        </main>
    )
};

export default Main;

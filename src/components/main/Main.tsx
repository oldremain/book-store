import React from "react";

import s from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <main id="main">
            <div className={s.main_container}></div>
        </main>
    );
};

export default Main;

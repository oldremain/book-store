import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

import s from "./App.module.scss";

const App: React.FC = () => {
    const [isShown, setShowSidebar] = useState<boolean>(false);

    const handleShowSidebar = () => {
        setShowSidebar((state) => !state);
    };

    // useEffect(() => {
    //     console.log(show);
    // }, [show]);

    return (
        <div className={s.app_container} style={{ overflow: isShown ? "hidden" : "visible" }}>
            <Header onClick={handleShowSidebar} />
            {isShown && <Sidebar onClick={handleShowSidebar} open={isShown} />}
            <Main />
        </div>
    );
};

export default App;

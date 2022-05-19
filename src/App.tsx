import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
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
        <div className={s.app_container}>
            <Header onClick={handleShowSidebar} />
            <Sidebar onClick={handleShowSidebar} open={isShown} />
        </div>
    );
};

export default App;

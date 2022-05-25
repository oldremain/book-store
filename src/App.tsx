import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/reduxHooks";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import BooksPage from "./components/main/booksPage/BooksPage";
import InitialPage from "./components/main/booksPage/initialPage/InitialPage";
import ResultsPage from "./components/main/booksPage/resultsPage/ResultsPage";

import s from "./App.module.scss";

const App: React.FC = () => {
    const showSidebar = useAppSelector((state) => state.sidebar.show);
    //console.log(showSidebar);

    return (
        <BrowserRouter>
            <div
                className={s.app_container}
                style={{ overflow: showSidebar ? "hidden" : "visible" }}
            >
                <Header />

                {showSidebar && <Sidebar />}

                <Main>
                    <Routes>
                        <Route path="/" element={<BooksPage />}>
                            <Route index element={<InitialPage />} />
                            <Route path="new/:page" element={<InitialPage />} />
                            <Route path="search/*" element={<ResultsPage />} />
                        </Route>
                    </Routes>
                </Main>
            </div>
        </BrowserRouter>
    );
};

export default App;

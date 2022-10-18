import React, { useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/reduxHooks";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import BooksPage from "./components/main/booksPage/BooksPage";
import BookPage from "./components/main/bookPage/BookPage";
import InitialPage from "./components/main/booksPage/initialPage/InitialPage";
import ResultsPage from "./components/main/booksPage/resultsPage/ResultsPage";
import Favourites from "./components/main/favourites/Favourites";
import Cart from "./components/main/cart/Cart";
import Form from "./components/account/form/Form";
import Account from "./components/account/Account";

import s from "./App.module.scss";

const App: React.FC = () => {
  const showSidebar = useAppSelector((state) => state.sidebar.show);
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.querySelector("body");
    if (bodyRef.current) {
      bodyRef.current.style.overflow = showSidebar ? "hidden" : "";
    }
  }, [showSidebar]);

  return (
    <BrowserRouter>
      <div className={s.app_container}>
        <Header />

        {showSidebar && <Sidebar />}

        <Main>
          <Routes>
            <Route path="/" element={<BooksPage />}>
              <Route index element={<InitialPage />} />
              <Route path="new/:page" element={<InitialPage />} />
              <Route path="search/:book/*" element={<ResultsPage />} />
              <Route path="books/:isbn" element={<BookPage />} />
              <Route path="favourites" element={<Favourites />} />
              {/* <Route path="cart" element={isLogged ? <Cart /> : <Navigate to={'/account/auth'}/>} /> */}
              {/* For testing purposes only */}
              <Route path="cart" element={<Cart />} />
              <Route path="account" element={<Account />}>
                <Route path="auth" element={<Form />} />
              </Route>
              <Route path="*" element={<Navigate to="/new/1" />} />
            </Route>
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
};

export default App;

// : <Navigate to={'/account/auth'}/>

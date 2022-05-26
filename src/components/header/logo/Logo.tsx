import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sortByPrice } from "../../../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

interface ILogoProps {
    cName: string;
}

const Logo: React.FC<ILogoProps> = ({ cName }) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     setTimeout(() => {
    //         navigate("/new/1");
    //     }, 0);
    // }; //  обнулять страницу, сбросить фильтры, навигация на 1 странице

    return (
        <div className={cName}>
            <Link to="/new">BOOKSTORE</Link>
        </div>
    );
};

export default Logo;

import React from "react";
import { Link } from "react-router-dom";

interface ILogoProps {
    cName: string;
}

const Logo: React.FC<ILogoProps> = ({ cName }) => {
    return (
        <div className={cName}>
            <Link to="/">BOOKSTORE</Link>
        </div>
    );
};

export default Logo;

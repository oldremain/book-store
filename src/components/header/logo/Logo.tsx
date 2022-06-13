import React from "react";
import { Link } from "react-router-dom";

interface ILogoProps {
    cName: string;
    onClick?: () => void
}

const Logo: React.FC<ILogoProps> = ({ cName, onClick }) => {
    return (
        <div className={cName} onClick={onClick}>
            <Link to="/new">BOOKSTORE</Link>
        </div>
    );
};

export default Logo;

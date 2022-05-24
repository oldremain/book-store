import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ILogoProps {
    cName: string;
}

const Logo: React.FC<ILogoProps> = ({ cName }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(() => {
            navigate("/new/1");
        }, 0);
    };

    return (
        <div className={cName} onClick={handleClick}>
            <Link to="/new">BOOKSTORE</Link>
        </div>
    );
};

export default Logo;

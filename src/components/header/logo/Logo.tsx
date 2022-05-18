import React from "react";

interface ILogoProps {
    cName: string;
}

const Logo: React.FC<ILogoProps> = ({ cName }) => {
    return (
        <div className={cName}>
            <span>BOOKSTORE</span>
        </div>
    );
};

export default Logo;

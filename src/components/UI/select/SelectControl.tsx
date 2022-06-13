import React from "react";

interface ISelectControlProps {
    children: React.ReactNode;
}

const SelectControl: React.FC<ISelectControlProps> = ({ children }) => {
    return (
        <>
            { children }
        </>
    );
}

export default SelectControl;

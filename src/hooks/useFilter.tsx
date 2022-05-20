import React, { useState, useEffect } from "react";

export const useFilter = () => {
    const [page, setPage] = useState(1);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return { page, handleChangePage };
};

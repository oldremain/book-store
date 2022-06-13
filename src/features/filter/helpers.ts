import { IBookType } from './../books/types';

export const getPreparedData = (arr: IBookType[], page: number, pageSize: string): IBookType[] => {
    return arr.slice((page - 1) * +pageSize, page * +pageSize);
};

export const getSortedData = (arr: IBookType[], order: string): IBookType[] => {
    switch (order) {
        case "asc": {
            return arr.sort((a, b) => +a.price.slice(1) - +b.price.slice(1));
        }
        case "desc": {
            return arr.sort((a, b) => +b.price.slice(1) - +a.price.slice(1));
        }
        default:
            return arr;
    }
};

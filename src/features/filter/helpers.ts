import { IBook } from "../../components/UI/bookCard/UiBookCard";

export const getPreparedData = (arr: IBook[], page: number, pageSize: string): IBook[] => {
    return arr.slice((page - 1) * +pageSize, page * +pageSize);
};

export const getSortedData = (arr: IBook[], order: string): IBook[] => {
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

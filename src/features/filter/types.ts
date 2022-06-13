import { IBookType } from "../books/types";

export interface ISortParams {
    books: IBookType[];
    priceOrder: string;
}

export interface IInitialState {
    pageSize: string;
    page: number;
    priceOrder: string;
    books: IBookType[];
    preparedData: IBookType[];
}
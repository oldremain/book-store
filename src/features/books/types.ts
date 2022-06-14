export interface IBookType {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

export interface IInitialState {
    searchField: string;
    total: number;
    page: number;
    data: IBookType[];
    loading: boolean;
    error: boolean;
    //isSubmited: boolean;
}

export interface IFetchBooksResponse {
    books: IBookType[];
    // error?: string;
    page: string;
    total: string;
}

export interface IQuerryParams {
    searchField: string;
    page: number;
}
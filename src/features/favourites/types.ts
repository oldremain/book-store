export interface IFavouriteBook {
    [key: string]: {
        title: string,
        subtitle: string,
        price: string,
        image: string,
        isbn13: string
    }
}
export interface IInitialState {
    books: IFavouriteBook[];
    preparedData: IFavouriteBook[];
    pageSize: string
}

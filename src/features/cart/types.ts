export interface ICartBook {
    [key: string]: {
        title: string,
        subtitle: string,
        price: string,
        image: string,
        isbn13: string
    }
}
export interface IUserPriceBasket {
    [key: string]: {
        count: number,
        price: number
    }
}
export interface IInitialState {
    books: ICartBook[];
    userPriceBasket: IUserPriceBasket;
    preparedData: ICartBook[];
    pageSize: string
}
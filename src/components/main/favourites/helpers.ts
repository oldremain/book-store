import { ICartBook } from '../../../features/cart/types';
import { IFavouriteBook } from './../../../features/favourites/types';

export const getBookData = (state: IFavouriteBook[] | ICartBook[]) => {
    return state.map(el => Object.values(el)).flat()
}
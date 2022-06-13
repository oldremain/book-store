import { IFavouriteBook } from './../../../features/favourites/types';

export const getBookData = (state: IFavouriteBook[]) => {
    return state.map(el => Object.values(el)).flat()
}
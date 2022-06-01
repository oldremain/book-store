import { IFavouriteBook } from "../../../features/favourites/favouritesSlice"

export const getBookData = (state: IFavouriteBook[]) => {
    return state.map(el => Object.values(el)).flat()
}
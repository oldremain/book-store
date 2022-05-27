import { IOneBookData } from "../../../../features/book/oneBookSlice";

const getPreparedData = (data: IOneBookData, detailsFields: string[]): [string, string][] => {
    return Object.entries(data).filter((field) => detailsFields.includes(field[0]));
};

export default getPreparedData;

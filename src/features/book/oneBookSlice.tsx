import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

//     "authors": "Julien Vehent"
//     "publisher": "Manning"
//     "year": "2018"
//     "language":"English"

// "error": "0"
//     "title": "Securing DevOps"
//     "subtitle": "Security in the Cloud"

//     "isbn10": "1617294136"
//     "isbn13": "9781617294136"
//     "pages": "384"

//     "rating": "5"
//     "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ..."
//     "price": "$26.98"
//     "image": "https://itbook.store/img/books/9781617294136.png"
//     "url": "https://itbook.store/books/9781617294136"
//     "pdf": {
//               "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
//               "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
//            }

interface IOneBookData {
    title: string;
    subtitle: string;
    language: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: string;
    desc: string;
    price: string;
    image: string;
}

interface IOneBookState {
    data: IOneBookData;
    loading: boolean;
    error: boolean;
}

const initialState: IOneBookState = {
    data: {
        title: "",
        subtitle: "",
        language: "",
        authors: "",
        publisher: "",
        isbn10: "",
        isbn13: "",
        pages: "",
        year: "",
        rating: "",
        desc: "",
        price: "",
        image: "",
    },
    loading: false,
    error: false,
};

export const fetchOneBook = createAsyncThunk<
    IOneBookData,
    string | undefined,
    { rejectValue: string }
>("oneBook/fetchOneBook", async (isbn, { rejectWithValue }) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 100);
    });

    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}`);
        return response.data;
    } catch (e: any) {
        rejectWithValue("server error");
    }
});

const oneBookSlice = createSlice({
    name: "oneBook",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneBook.pending, (state, { payload }) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchOneBook.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.loading = false;
            })
            .addCase(fetchOneBook.rejected, (state, { payload }) => {
                state.error = true;
                state.loading = false;
            });
    },
});

export default oneBookSlice.reducer;

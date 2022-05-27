import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISidebarState {
    show: boolean;
}

const initialState: ISidebarState = {
    show: false,
};

const sidebarSlice = createSlice({
    name: "showSidebar",
    initialState,
    reducers: {
        toggleVisibility(state, { payload }: PayloadAction<boolean | undefined>) {
            if (payload !== undefined) {
                state.show = payload;
            } else {
                state.show = !state.show;
            }
        },
    },
});

export const { toggleVisibility } = sidebarSlice.actions;

export default sidebarSlice.reducer;

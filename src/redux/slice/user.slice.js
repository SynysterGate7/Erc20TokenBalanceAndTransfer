import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userAddress: "",
        token: {}
    },
    reducers: {
        saveUserAddress: (state, action) => {
            state.userAddress = action.payload;
        },
        saveToken: (state, action) => {
            state.token = action.payload;
        },
        reset(state) {
            Object.assign(state, {
                userAddress: false,
                token: {},
            });
        },
    },
});

export const { saveUserAddress, saveToken, reset } = userSlice.actions;
export default userSlice.reducer;

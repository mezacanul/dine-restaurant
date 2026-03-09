import { createSlice } from "@reduxjs/toolkit";
import { content as esContent } from "../../cdn/es";
// import { content as esContent } from "../../cdn/es";
// import { content as enContent } from "../../cdn/en";

export const contentSlice = createSlice({
    name: "content",
    initialState: esContent,
    reducers: {},
});

export default contentSlice.reducer;

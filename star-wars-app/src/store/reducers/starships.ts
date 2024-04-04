import { Starship } from "../../models/Starship";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStarships{
    isLoading: boolean;
    error: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Starship[];
}

const initialState: IStarships = {
    isLoading: false,
    error: '',
    results: [],
    next: null,
    previous: null,
    count: 0
}

export const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        starshipsFetching: (state) => {
            state.isLoading = true;
        },
        starshipsFetchingSuccess: (state, action: PayloadAction<Starship[]>) =>{
            console.log(action.payload)
            state.results = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        starshipsFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            
        }
    }
});


export const starshipsReducer =  starshipsSlice.reducer;
export const starshipsAction = starshipsSlice.actions;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Species } from "../../models/species";

export interface ISpecies{
    isLoading: boolean;
    error: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Species[];
}

const initialState: ISpecies = {
    isLoading: false,
    error: '',
    results: [],
    next: null,
    previous: null,
    count: 0
}

export const speciesSlice = createSlice({
    name: 'species',
    initialState,
    reducers: {
        speciesFetching: (state) => {
            state.isLoading = true;
        },
        speciesFetchingSuccess: (state, action: PayloadAction<Species[]>) =>{
            console.log(action.payload)
            state.results = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        speciesFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            
        }
    }
});

export const speciesReducer =  speciesSlice.reducer;
export const speciesAction = speciesSlice.actions;
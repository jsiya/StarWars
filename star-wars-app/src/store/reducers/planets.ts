import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Planet } from "../../models/Planet";

export interface IPlanets{
    isLoading: boolean;
    error: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Planet[];
}

const initialState: IPlanets = {
    isLoading: false,
    error: '',
    results: [],
    next: null,
    previous: null,
    count: 0
}

export const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        planetsFetching: (state) => {
            state.isLoading = true;
        },
        planetsFetchingSuccess: (state, action: PayloadAction<Planet[]>) =>{
            console.log(action.payload)
            state.results = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        planetsFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            
        }
    }
});


export const planetsReducer =  planetsSlice.reducer;
export const planetsAction = planetsSlice.actions;
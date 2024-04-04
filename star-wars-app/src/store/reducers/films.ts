import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../models/Film";

export interface IFilms{
    isLoading: boolean;
    error: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Film[];
}

const initialState: IFilms = {
    isLoading: false,
    error: '',
    results: [],
    next: null,
    previous: null,
    count: 0
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmsFetching: (state) => {
            state.isLoading = true;
        },
        filmsFetchingSuccess: (state, action: PayloadAction<Film[]>) =>{
            console.log(action.payload)
            state.results = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        filmsFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            
        }
    }
});


export const filmsReducer =  filmsSlice.reducer;
export const filmsAction = filmsSlice.actions;
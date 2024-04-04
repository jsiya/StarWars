import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Person } from "../../models/Person";

export interface IPeople{
    isLoading: boolean;
    error: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}

const initialState: IPeople = {
    isLoading: false,
    error: '',
    results: [],
    next: null,
    previous: null,
    count: 0
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        peopleFetching: (state) => {
            state.isLoading = true;
        },
        peopleFetchingSuccess: (state, action: PayloadAction<Person[]>) =>{
            //console.log(action.payload)
            state.results = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        peopleFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            
        }
    }
});



export const peopleReducer =  peopleSlice.reducer;
export const peopleAction = peopleSlice.actions;
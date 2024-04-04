import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "../../models/Vehicle";

export interface IVehicles{
    isLoading: boolean;
    error: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Vehicle[];
}

const initialState: IVehicles = {
    isLoading: false,
    error: '',
    results: [],
    next: null,
    previous: null,
    count: 0
}

export const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        vehiclesFetching: (state) => {
            state.isLoading = true;
        },
        vehiclesFetchingSuccess: (state, action: PayloadAction<Vehicle[]>) =>{
            console.log(action.payload)
            state.results = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        vehiclesFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            
        }
    }
});


export const vehiclesReducer =  vehiclesSlice.reducer;
export const vehiclesAction = vehiclesSlice.actions;
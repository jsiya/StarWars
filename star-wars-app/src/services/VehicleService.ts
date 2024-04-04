import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVehicles } from "../store/reducers/vehicles";


export const vehiclesAPI = createApi({
    reducerPath: 'vehicles',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllVehicles: build.query<IVehicles, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'vehicles/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})
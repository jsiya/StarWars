import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlanets } from "../store/reducers/planets";


export const planetsAPI = createApi({
    reducerPath: 'planets',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllPlanets: build.query<IPlanets, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'planets/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})
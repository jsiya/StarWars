import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISpecies } from "../store/reducers/species";


export const speciesAPI = createApi({
    reducerPath: 'species',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllSpecies: build.query<ISpecies, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'species/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})
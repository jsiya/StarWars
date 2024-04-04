import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStarships } from "../store/reducers/starships";


export const starshipsAPI = createApi({
    reducerPath: 'starships',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllStarships: build.query<IStarships, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'starships/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})
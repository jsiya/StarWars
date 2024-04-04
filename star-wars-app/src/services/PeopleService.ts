import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPeople } from "../store/reducers/people";


export const peopleAPI = createApi({
    reducerPath: 'people',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllPeople: build.query<IPeople, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'people/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})
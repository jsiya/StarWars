import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilms } from "../store/reducers/films";


export const filmsAPI = createApi({
    reducerPath: 'films',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllFilms: build.query<IFilms, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'films/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})
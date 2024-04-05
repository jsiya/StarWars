import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilms } from "../store/reducers/films";
import { Film } from "../models/Film";


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

export const filmAPI = createApi({
    reducerPath: 'film',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
      fetchFilm: build.query<Film, number | null>({
        query: (id: number | null = null) => ({
          url: id != null ? `films/${id}/` : 'films/'
        })
      })
    }),
  })
  
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISpecies } from "../store/reducers/species";
import { Species } from "../models/Species";


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

export const specieAPI = createApi({
    reducerPath: 'specie',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
      fetchSpecie: build.query<Species, number | null>({
        query: (id: number | null = null) => ({
          url: id != null ? `species/${id}/` : 'species/'
        })
      })
    }),
  })
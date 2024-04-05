import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlanets } from "../store/reducers/planets";
import { Planet } from "../models/Planet";


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

export const planetAPI = createApi({
    reducerPath: 'planet',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
      fetchPlanet: build.query<Planet, number | null>({
        query: (id: number | null = null) => ({
          url: id != null ? `planets/${id}/` : 'planets/'
        })
      })
    }),
  })
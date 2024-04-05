import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IStarships } from "../store/reducers/starships";
import { Starship } from "../models/Starship";


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

export const starshipAPI = createApi({
    reducerPath: 'starship',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
      fetchStarship: build.query<Starship, number | null>({
        query: (id: number | null = null) => ({
          url: id != null ? `starships/${id}/` : 'starships/'
        })
      })
    }),
  })
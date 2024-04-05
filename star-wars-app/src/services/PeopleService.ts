import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPeople } from "../store/reducers/people";
import { Person } from "../models/Person";


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

export const personAPI = createApi({
    reducerPath: 'person',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
      fetchPerson: build.query<Person, number | null>({
        query: (id: number | null = null) => ({
          url: id != null ? `people/${id}/` : 'people/'
        })
      })
    }),
  })
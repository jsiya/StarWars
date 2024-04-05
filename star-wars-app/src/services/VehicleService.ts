import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVehicles } from "../store/reducers/vehicles";
import { Vehicle } from "../models/Vehicle";


export const vehiclesAPI = createApi({
    reducerPath: 'vehicles',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
        fetchAllVehicles: build.query<IVehicles, number | null>({
            query: (page_: number | null = 1) => (
                {
                    url: 'vehicles/',
                    params: {
                        page: page_
                    }
                }
            )
        })
    }),
})

export const vehicleAPI = createApi({
    reducerPath: 'vehicle',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (build) => ({
      fetchVehicle: build.query<Vehicle, number | null>({
        query: (id: number | null = null) => ({
          url: id != null ? `vehicles/${id}/` : 'vehicles/'
        })
      })
    }),
  })
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { peopleReducer } from "./reducers/people";
import { planetsReducer } from "./reducers/planets";
import { filmsReducer } from "./reducers/films";
import { speciesReducer } from "./reducers/species";
import { starshipsReducer } from "./reducers/starships";
import { vehiclesReducer } from "./reducers/vehicles";
import { peopleAPI, personAPI } from "../services/PeopleService";
import { planetAPI, planetsAPI } from "../services/PlanetService";
import { vehicleAPI, vehiclesAPI } from "../services/VehicleService";
import { starshipAPI, starshipsAPI } from "../services/StarshipService";
import { filmAPI, filmsAPI } from "../services/FilmService";
import { specieAPI, speciesAPI } from "../services/SpeciesService";


const rootReducer = combineReducers({
    peopleReducer,
    planetsReducer,
    filmsReducer,
    speciesReducer,
    starshipsReducer,
    vehiclesReducer,
    [peopleAPI.reducerPath] : peopleAPI.reducer,
    [planetsAPI.reducerPath]: planetsAPI.reducer,
    [vehiclesAPI.reducerPath]: vehiclesAPI.reducer,
    [starshipsAPI.reducerPath]: starshipsAPI.reducer,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
    [speciesAPI.reducerPath]: speciesAPI.reducer,


    [filmAPI.reducerPath]: filmAPI.reducer,
    [personAPI.reducerPath]: personAPI.reducer,
    [planetAPI.reducerPath]: planetAPI.reducer,
    [specieAPI.reducerPath]: specieAPI.reducer,
    [starshipAPI.reducerPath]: starshipAPI.reducer,
    [vehicleAPI.reducerPath]: vehicleAPI.reducer
});

const configureMiddleware = [
    peopleAPI.middleware,
    planetsAPI.middleware,
    vehiclesAPI.middleware,
    speciesAPI.middleware,
    filmsAPI.middleware,
    starshipsAPI.middleware,


    filmAPI.middleware,
    personAPI.middleware,
    planetAPI.middleware,
    specieAPI.middleware,
    starshipAPI.middleware,
    vehicleAPI.middleware
]

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(configureMiddleware)
    });
};

export type RootState = ReturnType<typeof rootReducer>;

export type  AppStore = ReturnType<typeof setupStore>;

export type  AppDispatch = AppStore['dispatch']

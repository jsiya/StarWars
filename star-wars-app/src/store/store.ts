import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { peopleReducer } from "./reducers/people";
import { planetsReducer } from "./reducers/planets";
import { filmsReducer } from "./reducers/films";
import { speciesReducer } from "./reducers/species";
import { starshipsReducer } from "./reducers/starships";
import { vehiclesReducer } from "./reducers/vehicles";
import { peopleAPI } from "../services/PeopleService";
import { planetsAPI } from "../services/PlanetService";
import { vehiclesAPI } from "../services/VehicleService";
import { starshipsAPI } from "../services/StarshipService";
import { filmsAPI } from "../services/FilmService";
import { speciesAPI } from "../services/SpeciesService";


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
    [speciesAPI.reducerPath]: speciesAPI.reducer
});

const configureMiddleware = [
    peopleAPI.middleware,
    planetsAPI.middleware,
    vehiclesAPI.middleware,
    speciesAPI.middleware,
    filmsAPI.middleware,
    starshipsAPI.middleware
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

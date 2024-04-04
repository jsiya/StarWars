import axios from 'axios';
import { AppDispatch } from './store';
import { peopleAction } from './reducers/people';
import { planetsAction } from './reducers/planets';
import { vehiclesAction } from './reducers/vehicles';
import { starshipsAction } from './reducers/starships';
import { filmsAction } from './reducers/films';
import { speciesAction } from './reducers/species';

export const fetchPeople = () =>async (dispatch: AppDispatch) => {
    dispatch(peopleAction.peopleFetching());
    try {
        const response = await axios.get('https://swapi.dev/api/people/');
        dispatch(peopleAction.peopleFetchingSuccess((response).data))
    } catch (error : any) {
        dispatch(peopleAction.peopleFetchingReject(error.message))
    }
}

export const fetchPlanets = () =>async (dispatch: AppDispatch) => {
    dispatch(planetsAction.planetsFetching());
    try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        dispatch(planetsAction.planetsFetchingSuccess((response).data))
    } catch (error : any) {
        dispatch(planetsAction.planetsFetchingReject(error.message))
    }
}

export const fetchVehicles = () =>async (dispatch: AppDispatch) => {
    dispatch(vehiclesAction.vehiclesFetching());
    try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        dispatch(vehiclesAction.vehiclesFetchingSuccess((response).data))
    } catch (error : any) {
        dispatch(vehiclesAction.vehiclesFetchingReject(error.message))
    }
}

export const fetchStarships = () =>async (dispatch: AppDispatch) => {
    dispatch(starshipsAction.starshipsFetching());
    try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        dispatch(starshipsAction.starshipsFetchingSuccess((response).data))
    } catch (error : any) {
        dispatch(starshipsAction.starshipsFetchingReject(error.message))
    }
}

export const fetchFilms = () =>async (dispatch: AppDispatch) => {
    dispatch(filmsAction.filmsFetching());
    try {
        const response = await axios.get('https://swapi.dev/api/films/');
        dispatch(filmsAction.filmsFetchingSuccess((response).data))
    } catch (error : any) {
        dispatch(filmsAction.filmsFetchingReject(error.message))
    }
}

export const fetchSpecies = () =>async (dispatch: AppDispatch) => {
    dispatch(speciesAction.speciesFetching());
    try {
        const response = await axios.get('https://swapi.dev/api/species/');
        dispatch(speciesAction.speciesFetching((response).data))
    } catch (error : any) {
        dispatch(speciesAction.speciesFetchingReject(error.message))
    }
}
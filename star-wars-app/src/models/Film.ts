import { Person } from "./Person";
import { Planet } from "./Planet";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";
import { Species } from "./Species";

export interface Film{
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    planets: Planet[], 
    characters: Person[],
    species: Species[],
    vehicles: Vehicle[],
    starships: Starship[],
    created: string,
    edited: string,
    url: string
}
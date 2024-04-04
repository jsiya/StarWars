import { Film } from "./Film";
import { Person } from "./Person";

export interface Starship{
    name: string,
    model: string,
    manufacturer: string,
    costInCredits: string,
    length: string,
    maxAtmospheringSpeed: string,
    crew: string,
    passengers: string,
    cargoCapacity: string,
    consumables: string,
    hyperdriveRating: string,
    MGLT: string,
    starshipClass: string,
    pilots: Person[],
    films: Film[],
    created: string,
    edited: string,
    url: string
}
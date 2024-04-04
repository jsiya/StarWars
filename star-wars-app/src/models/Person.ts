import { Film } from "./Film";
import { Planet } from "./Planet";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";
import { Species } from "./species";

export interface Person{
    name: string,
    height: string,
    mass: string,
    hairColor?: string,
    skinColor: string,
    eyeColor: string,
    birthYear: string,
    gender?: string,
    homeworld: Planet, 
    films: Film[],
    species: Species[],
    vehicles: Vehicle[],
    starships: Starship[],
    created: string,
    edited: string,
    url: string
};

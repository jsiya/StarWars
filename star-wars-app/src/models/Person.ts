import { Film } from "./Film";
import { Planet } from "./Planet";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";
import { Species } from "./Species";

export interface Person{
    name: string,
    height: string,
    mass: string,
    hair_color?: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
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

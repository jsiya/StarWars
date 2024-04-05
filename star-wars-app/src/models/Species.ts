import { Film } from "./Film";
import { Person } from "./Person";
import { Planet } from "./Planet";

export interface Species{
    name: string,
    classification: string,
    designation: string,
    average_height?: string,
    eye_color?: string,
    skin_color?: string,
    hair_color?: string,
    average_lifespan: string,
    birth_year: string,
    language?: string,
    homeworld?: Planet, 
    films: Film[],
    people: Person[],
    created: string,
    edited: string,
    url: string
}
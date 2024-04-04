import { Film } from "./Film";
import { Person } from "./Person";
import { Planet } from "./Planet";

export interface Species{
    name: string,
    classification: string,
    designation: string,
    averageHeight?: string,
    eyeColor?: string,
    skinColor?: string,
    hairColor?: string,
    averageLifespan: string,
    birthYear: string,
    language?: string,
    homeworld?: Planet, 
    films: Film[],
    people: Person[],
    created: string,
    edited: string,
    url: string
}
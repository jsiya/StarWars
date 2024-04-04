import { Film } from "./Film"
import { Person } from "./Person"

export interface Planet{
    name: string,
    rotationPeriod: string,
    orbitalPeriod: string
    diametr: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string
    population: string,
    residents: Person[],
    films: Film[],
    created: string,
    edited: string,
    url: string
}
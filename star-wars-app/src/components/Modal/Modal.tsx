import { Film } from '../../models/Film';
import { Person } from '../../models/Person';
import { Planet } from '../../models/Planet';
import { Starship } from '../../models/Starship';
import { Vehicle } from '../../models/Vehicle';
import { Species } from '../../models/Species';
import { filmAPI } from '../../services/FilmService';
import { personAPI } from '../../services/PeopleService';
import './Modal.css';
import { specieAPI } from '../../services/SpeciesService';
import { planetAPI } from '../../services/PlanetService';
import { starshipAPI } from '../../services/StarshipService';
import { vehicleAPI } from '../../services/VehicleService';

type ModalData = Person | Planet | Starship | Vehicle | Species | Film;

interface ModalProps {
  closeModal: (x: boolean) => void;
  data: ModalData | null;
}

const isPerson = (data: ModalData): data is Person => 'mass' in data;
const isPlanet = (data: ModalData): data is Planet => 'diameter' in data;
const isStarship = (data: ModalData): data is Starship => 'hyperdrive_rating' in data;
const isVehicle = (data: ModalData): data is Vehicle => 'vehicle_class' in data;
const isSpecies = (data: ModalData): data is Species => 'designation' in data;
const isFilm = (data: ModalData): data is Film => 'director' in data;

function Modal({ closeModal, data }: ModalProps) {

  console.log(data.url);
  const id = data.url.split('/').filter(Boolean).pop();
  console.log(id);

  const renderContent = () => {
    if (!data) return null;

    if (isPerson(data)) {
      const { data: personData } = personAPI.useFetchPersonQuery(parseInt(id));
      console.log(personData);
      console.log("person data");
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <div className='main-sec'>
          {personData && (
            <>
            <div className="info-sec">
                <p className="label">Name:</p>
                <p className="field">{personData.name}</p>
              </div>
              <div className="info-sec">
                <p className="label">Birth Year:</p>
                <p className="field">{personData.birth_year}</p>
              </div>
              <div className="info-sec">
                <p className="label">Eye Color:</p>
                <p className="field">{personData.eye_color}</p>
              </div>
              <div className="info-sec">
                <p className="label">Skin Color:</p>
                <p className="field">{personData.skin_color}</p>
              </div>
              <div className="info-sec">
                <p className="label">Gender:</p>
                <p className="field">{personData.gender}</p>
              </div>
              <div className="info-sec">
                <p className="label">Height:</p>
                <p className="field">{personData.height}</p>
              </div>
              <div className="info-sec">
                <p className="label">Hair color:</p>
                <p className="field">{personData.hair_color}</p>
              </div>
              <div className="info-sec">
                <p className="label">Homeworld:</p>
                <p className="field">{personData.homeworld.name}</p>
              </div>
              <div className="info-sec">
                <p className="label">Mass:</p>
                <p className="field">{personData.mass}</p>
              </div>
            </>
          )}
          </div>
          <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }

    if (isPlanet(data)) {
      const { data: planetData } = planetAPI.useFetchPlanetQuery(parseInt(id));
      console.log(planetData);
      console.log("planet");
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <div className='main-sec'>
          {planetData && (
            <>
            <div className="info-sec">
                <p className="label">Name:</p>
                <p className="field">{planetData.name}</p>
              </div>
              <div className="info-sec">
                <p className="label">Climate:</p>
                <p className="field">{planetData.climate}</p>
              </div>
              <div className="info-sec">
                <p className="label">Diametr:</p>
                <p className="field">{planetData.diameter}</p>
              </div>
              <div className="info-sec">
                <p className="label">Gravity:</p>
                <p className="field">{planetData.gravity}</p>
              </div>
              <div className="info-sec">
                <p className="label">Population:</p>
                <p className="field">{planetData.population}</p>
              </div>
              <div className="info-sec">
                <p className="label">Terrain:</p>
                <p className="field">{planetData.terrain}</p>
              </div>
              <div className="info-sec">
                <p className="label">Surface Water:</p>
                <p className="field">{planetData.surface_water}</p>
              </div>
              <div className="info-sec">
                <p className="label">Orbital Period:</p>
                <p className="field">{planetData.orbital_period}</p>
              </div>
            </>
          )}
          </div>
          <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }
    if (isStarship(data)) {
      const { data: starshipData } = starshipAPI.useFetchStarshipQuery(parseInt(id));
      console.log(starshipData);
      console.log("starshipData");
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <div className='main-sec'>
          {starshipData && (
            <>
            <div className="info-sec">
                <p className="label">Name:</p>
                <p className="field">{starshipData.name}</p>
              </div>
              <div className="info-sec">
                <p className="label">Cargo Capasity:</p>
                <p className="field">{starshipData.cargo_capacity}</p>
              </div>
              <div className="info-sec">
                <p className="label">Consumables:</p>
                <p className="field">{starshipData.consumables}</p>
              </div>
              <div className="info-sec">
                <p className="label">Crew:</p>
                <p className="field">{starshipData.crew}</p>
              </div>
              <div className="info-sec">
                <p className="label">Hyper Drive Rating:</p>
                <p className="field">{starshipData.hyperdrive_rating}</p>
              </div>
              <div className="info-sec">
                <p className="label">Passengers:</p>
                <p className="field">{starshipData.passengers}</p>
              </div>
            </>
          )}
          </div>
          <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }
    if (isVehicle(data)) {
      const { data: vehicleData } = vehicleAPI.useFetchVehicleQuery(parseInt(id));
      console.log(vehicleData);
      console.log("starshipData");
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <div className='main-sec'>
          {vehicleData && (
            <>
            <div className="info-sec">
                <p className="label">Name:</p>
                <p className="field">{vehicleData.name}</p>
              </div>
              <div className="info-sec">
                <p className="label">Cargo Capasity:</p>
                <p className="field">{vehicleData.cargo_capacity}</p>
              </div>
              <div className="info-sec">
                <p className="label">Consumables:</p>
                <p className="field">{vehicleData.consumables}</p>
              </div>
              <div className="info-sec">
                <p className="label">Crew:</p>
                <p className="field">{vehicleData.crew}</p>
              </div>
              <div className="info-sec">
                <p className="label">Model:</p>
                <p className="field">{vehicleData.model}</p>
              </div>
              <div className="info-sec">
                <p className="label">Passengers:</p>
                <p className="field">{vehicleData.passengers}</p>
              </div>
            </>
          )}
          </div>
          <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }
    if (isSpecies(data)) {
      const { data: speciesdata } = specieAPI.useFetchSpecieQuery(parseInt(id));
      console.log(speciesdata);
      console.log("speciesdata");
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <div className='main-sec'>
          {speciesdata && (
            <>
            <div className="info-sec">
                <p className="label">Name:</p>
                <p className="field">{speciesdata.name}</p>
              </div>
              <div className="info-sec">
                <p className="label">Language:</p>
                <p className="field">{speciesdata.language}</p>
              </div>
              <div className="info-sec">
                <p className="label">Designation:</p>
                <p className="field">{speciesdata.designation}</p>
              </div>
              <div className="info-sec">
                <p className="label">Avarage Lifespan:</p>
                <p className="field">{speciesdata.average_lifespan}</p>
              </div>
              <div className="info-sec">
                <p className="label">Classification:</p>
                <p className="field">{speciesdata.classification}</p>
              </div>
              <div className="info-sec">
                <p className="label">Avarage Height:</p>
                <p className="field">{speciesdata.average_height}</p>
              </div>
            </>
          )}
          </div>
          <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }
    if (isFilm(data)) {
      const { data: filmData } = filmAPI.useFetchFilmQuery(parseInt(id));
      console.log(filmData);
      console.log("filmData");
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <div className='main-sec'>
          {filmData && (
            <>
            <div className="info-sec">
                <p className="label">Title:</p>
                <p className="field">{filmData.title}</p>
              </div>
              <div className="info-sec">
                <p className="label">Episode ID:</p>
                <p className="field">{filmData.episode_id}</p>
              </div>
              <div className="info-sec">
                <p className="label">Director:</p>
                <p className="field">{filmData.director}</p>
              </div>
              <div className="info-sec">
                <p className="label">Producer:</p>
                <p className="field">{filmData.producer}</p>
              </div>
              <div className="info-sec">
                <p className="label">Relase Date:</p>
                <p className="field">{filmData.release_date}</p>
              </div>
              <div className="info-sec">
                <p className="label">Opening Crawl:</p>
                <p className="field">{filmData.opening_crawl}</p>
              </div>
            </>
          )}
          </div>
          <button className='close-btn' onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }
    
    

    return (
      <div className="modalContainer">
        <h2>Unknown Data Type</h2>
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    );
  };

  return <div className="modalBackground">{renderContent()}</div>;
}

export default Modal;

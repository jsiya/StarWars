import { Film } from '../../models/Film';
import { Person } from '../../models/Person';
import { Planet } from '../../models/Planet';
import { Starship } from '../../models/Starship';
import { Vehicle } from '../../models/Vehicle';
import { Species } from '../../models/species';
import './Modal.css';

type ModalData = Person | Planet | Starship | Vehicle | Species | Film;

interface ModalProps {
  closeModal: (x: boolean) => void;
  data: ModalData | null;
}

const isPerson = (data: ModalData): data is Person => 'name' in data;
const isPlanet = (data: ModalData): data is Planet => 'diameter' in data;
const isStarship = (data: ModalData): data is Starship => 'model' in data;
const isVehicle = (data: ModalData): data is Vehicle => 'vehicle_class' in data;
const isSpecies = (data: ModalData): data is Species => 'classification' in data;
const isFilm = (data: ModalData): data is Film => 'director' in data;

function Modal({ closeModal, data }: ModalProps) {
  const renderContent = () => {
    if (!data) return null;

    if (isPerson(data)) {
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <p>Name: {data.name}</p>
          <button onClick={() => closeModal(false)}>Close</button>
        </div>
      );
    }

    if (isPlanet(data)) {
      return (
        <div className="modalContainer">
          <h2>More Info</h2>
          <p>Name: {data.name}</p>
          <button onClick={() => closeModal(false)}>Close</button>
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

import { useEffect, useState } from 'react';
import loadingLogo from '../../assets/images/waiting.png'
import Modal from "../../components/Modal/Modal";
import { Vehicle } from '../../models/Vehicle';
import { vehiclesAPI } from '../../services/VehicleService';
import vehicleIcon from '../../assets/images/icons8-star-wars-rebellion-ship-96.png'
import './vehicles.css';

function Vehicles() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const {data, isLoading, error} = vehiclesAPI.useFetchAllVehiclesQuery(page);

  const [selectedItem, setSelectedItem] = useState<Vehicle | null>(null);
  const [showModal, setShowModal] = useState(false);
  console.log(data)
  console.log(vehicles)

function deepCompare(obj1: Vehicle, obj2: Vehicle) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

useEffect(() => {
  if (data && data.results) {
    setVehicles(prev => {
      const isNewData = prev.length !== data.results.length || prev.some((vehicle, index) => !deepCompare(vehicle, data.results[index]));
      if (isNewData) {
        return [...prev, ...data.results];
      } 
      else {
        return prev;
      }
    });
    setMaxPage(Math.ceil(data.count / 10));
  }
}, [data]);

  const handleLoadMore = () => {
    if (page < maxPage) {
      setPage(prevPage => prevPage + 1);
      console.log(vehicles)
    }
  }


  const handleMoreInfoClick = (item: Vehicle) => {
    setSelectedItem(item);
    setShowModal(true);
  }



    return (
      <>
        {isLoading && <img className='loading-logo' src={loadingLogo}/>}

        <div className="card-sec">
          <ul className="card-list">
            {
              vehicles?.map((vehicle, index) => (
                <li key={index} className="card">
                  <img className="card-icon" src={vehicleIcon} alt="" />
                  <div className="inner-card">
                  <div className="preview-info-sec">
                      <p className="label">Name:</p>
                      <p className="field">{vehicle.name}</p>
                    </div>
                    <div className="preview-info-sec">
                      <p className="label">Model:</p>
                      <p className="field">{vehicle.model}</p>
                    </div>
                    <button className='moreinfo-btn' onClick={() => handleMoreInfoClick(vehicle)}>More Info</button>
                    </div>
                </li>
              ))
            }
          </ul>
        </div>
        {page < maxPage && <button className='loadmore-btn' onClick={handleLoadMore}>Load More</button>}
          
        {/* Modal */}
        {showModal && <Modal closeModal={setShowModal} data={selectedItem}/>}
      </>
    )
  }
  
  export default Vehicles
  
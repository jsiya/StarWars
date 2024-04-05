import { useEffect, useState } from "react";
import loadingLogo from '../../assets/images/waiting.png'
import { Planet } from "../../models/Planet";
import { planetsAPI } from "../../services/PlanetService";
import Modal from "../../components/Modal/Modal";
import planetIcon from '../../assets/images/icons8-death-star-96.png'
import './Planets.css'

function Planets() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 
  const [planets, setPlanets] = useState<Planet[]>([]);
  const {data, isLoading, error} = planetsAPI.useFetchAllPlanetsQuery(page);

  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [showModal, setShowModal] = useState(false);

  function deepCompare(obj1: Planet, obj2: Planet) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  useEffect(() => {
    if (data && data.results) {
      setPlanets(prev => {
        const isNewData = prev.length !== data.results.length || prev.some((planet, index) => !deepCompare(planet, data.results[index]));
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
      console.log(planets)
    }
  }


  const handleMoreInfoClick = (planet: Planet) => {
    setSelectedPlanet(planet);
    setShowModal(true);
  }



    return (
      <>
        {isLoading && <img className='loading-logo' src={loadingLogo}/>}

        <div className="card-sec">
          <ul className="card-list">
            {
              planets?.map((planet, index) => (
                <li key={index} className="card">
                  <img className="card-icon" src={planetIcon} alt="" />
                  <div className="inner-card">
                    <div className="preview-info-sec">
                      <p className="label">Name:</p>
                      <p className="field">{planet.name}</p>
                    </div>
                    <div className="preview-info-sec">
                      <p className="label">Population:</p>
                      <p className="field">{planet.population}</p>
                    </div>
                    <button className='moreinfo-btn' onClick={() => handleMoreInfoClick(planet)}>More Info</button>
                    </div>
                </li>
              ))
            }
          </ul>
        </div>
        {page < maxPage && <button className='loadmore-btn' onClick={handleLoadMore}>Load More</button>}
          
        {/* Modal */}
        {showModal && <Modal closeModal={setShowModal} data={selectedPlanet}/>}
      </>
    )
  }
  
  export default Planets
  
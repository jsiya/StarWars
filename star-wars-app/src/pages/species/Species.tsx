import { useEffect, useState } from "react";
import { Species } from "../../models/species";
import { speciesAPI } from "../../services/SpeciesService";
import loadingLogo from '../../assets/images/waiting.png'
import Modal from "../../components/Modal/Modal";
import speciesIcon from '../../assets/images/icons8-baby-yoda-240.png'
import './Species.css'

function Species() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 
  const [species, setSpecies] = useState<Species[]>([]);
  const {data, isLoading, error} = speciesAPI.useFetchAllSpeciesQuery(page);

  const [selectedItem, setSelectedItem] = useState<Species | null>(null);
  const [showModal, setShowModal] = useState(false);

  function deepCompare(obj1: Species, obj2: Species) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  useEffect(() => {
    if (data && data.results) {
      setSpecies(prev => {
        const isNewData = prev.length !== data.results.length || prev.some((species, index) => !deepCompare(species, data.results[index]));
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
      console.log(species)
    }
  }


  const handleMoreInfoClick = (item: Species) => {
    setSelectedItem(item);
    setShowModal(true);
  }
  return (
    <>
      {isLoading && <img className='loading-logo' src={loadingLogo}/>}

      <div className="card-sec">
        <ul className="card-list">
          {
            species?.map((specie, index) => (
              <li key={index} className="card">
                <img className="card-icon" src={speciesIcon} alt="" />
                <div className="inner-card">
                <div className="preview-info-sec">
                      <p className="label">Name:</p>
                      <p className="field">{specie.name}</p>
                    </div>
                    <div className="preview-info-sec">
                      <p className="label">Classification:</p>
                      <p className="field">{specie.classification}</p>
                    </div>
                  <button className='moreinfo-btn' onClick={() => handleMoreInfoClick(specie)}>More Info</button>
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
  
  export default Species
  
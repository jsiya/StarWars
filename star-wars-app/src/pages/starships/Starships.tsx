import { useEffect, useState } from "react";
import { Starship } from "../../models/Starship";
import { starshipsAPI } from "../../services/StarshipService";
import loadingLogo from '../../assets/images/waiting.png'
import Modal from "../../components/Modal/Modal";
import './Starships.css'
import starshipIcon from '../../assets/images/icons8-star-wars-millenium-falcon-96.png'

function Starships() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 
  const [starships, setStarships] = useState<Starship[]>([]);
  const {data, isLoading, error} = starshipsAPI.useFetchAllStarshipsQuery(page);

  const [selectedItem, setSelectedItem] = useState<Starship | null>(null);
  const [showModal, setShowModal] = useState(false);

  function deepCompare(obj1: Starship, obj2: Starship) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  useEffect(() => {
    if (data && data.results) {
      setStarships(prev => {
        const isNewData = prev.length !== data.results.length || prev.some((starship, index) => !deepCompare(starship, data.results[index]));
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
      console.log(starships)
    }
  }


  const handleMoreInfoClick = (item: Starship) => {
    setSelectedItem(item);
    setShowModal(true);
  }



    return (
      <>
        {isLoading && <img className='loading-logo' src={loadingLogo}/>}

        <div className="card-sec">
          <ul className="card-list">
            {
              starships?.map((starship, index) => (
                <li key={index} className="card">
                  <img className="card-icon" src={starshipIcon} alt="" />
                  <div className="inner-card">
                  <div className="preview-info-sec">
                      <p className="label">Name:</p>
                      <p className="field">{starship.name}</p>
                    </div>
                    <div className="preview-info-sec">
                      <p className="label">Model:</p>
                      <p className="field">{starship.model}</p>
                    </div>
                    <button className='moreinfo-btn' onClick={() => handleMoreInfoClick(starship)}>More Info</button>
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
  
  export default Starships
  
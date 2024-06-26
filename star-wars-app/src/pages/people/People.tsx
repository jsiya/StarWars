import { peopleAPI } from "../../services/PeopleService";
import loadingLogo from '../../assets/images/waiting.png'
import characterIcon from '../../assets/images/icons8-star-wars-240 (1).png'
import './People.css'
import { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import Modal from "../../components/Modal/Modal";

function People() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 
  const [people, setPeople] = useState<Person[]>([]);
  const {data, isLoading, error} = peopleAPI.useFetchAllPeopleQuery(page);

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [showModal, setShowModal] = useState(false);

  function deepCompare(obj1: Person, obj2: Person) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  useEffect(() => {
    if (data && data.results) {
      setPeople(prev => {
        const isNewData = prev.length !== data.results.length || prev.some((person, index) => !deepCompare(person, data.results[index]));
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
      console.log(people)
    }
  }


  const handleMoreInfoClick = (person: Person) => {
    setSelectedPerson(person);
    setShowModal(true);
  }


    return (
      <>
        {isLoading && <img className='loading-logo' src={loadingLogo}/>}

        <div className="card-sec">
          <ul className="card-list">
            {
              people?.map((person, index) => (
                <li key={index} className="card">
                  <img className="card-icon" src={characterIcon} alt="" />
                  <div className="inner-card">
                  <div className="preview-info-sec">
                      <p className="label">Name:</p>
                      <p className="field">{person.name}</p>
                    </div>
                    <div className="preview-info-sec">
                      <p className="label">Gender:</p>
                      <p className="field">{person.gender}</p>
                    </div>
                    <button className='moreinfo-btn' onClick={() => handleMoreInfoClick(person)}>More Info</button>
                    </div>
                </li>
              ))
            }
          </ul>
        </div>
        {page < maxPage && <button className='loadmore-btn' onClick={handleLoadMore}>Load More</button>}

        {/* Modal */}
        {showModal && <Modal closeModal={setShowModal} data={selectedPerson}/>}
      </>
    )
  }
  
  export default People
  
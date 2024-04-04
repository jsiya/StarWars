import { useEffect, useState } from 'react';
import { Film } from '../../models/Film';
import { filmsAPI } from '../../services/FilmService';
import loadingLogo from '../../assets/images/waiting.png'
import filmIcon from'../../assets/images/icons8-star-wars-256.png'
import './Films.css'
import Modal from '../../components/Modal/Modal';

function Films() {

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1); 
  const [films, setFilms] = useState<Film[]>([]);
  const {data, isLoading, error} = filmsAPI.useFetchAllFilmsQuery(page);

  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [showModal, setShowModal] = useState(false);

  function deepCompare(obj1: Film, obj2: Film) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  useEffect(() => {
    if (data && data.results) {
      setFilms(prev => {
        const isNewData = prev.length !== data.results.length || prev.some((film, index) => !deepCompare(film, data.results[index]));
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
      console.log(films)
    }
  }


  const handleMoreInfoClick = (film: Film) => {
    setSelectedFilm(film);
    setShowModal(true);
  }

    return (
      <>
        {isLoading && <img className='loading-logo' src={loadingLogo}/>}

<div className="films">
  <ul className="films-list">
    {
      films?.map((film, index) => (
        <li key={index} className="film">
          <img className="film-icon" src={filmIcon} alt="" />
          <div>
            <p>Name: {film.title}</p>
            <p>Created: {film.created.substring(0, 10)}</p>
            <button onClick={() => handleMoreInfoClick(film)}>More Info</button>
            </div>
        </li>
      ))
    }
  </ul>
</div>
{page < maxPage && <button onClick={handleLoadMore}>Load More</button>}

{/* Modal */}
{showModal && <Modal closeModal={setShowModal} data={selectedFilm}/>}
      </>
    )
  }
  
  export default Films
  
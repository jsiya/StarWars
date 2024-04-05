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

<div className="card-sec">
  <ul className="card-list">
    {
      films?.map((film, index) => (
        <li key={index} className="card">
          <img className="card-icon" src={filmIcon} alt="" />
          <div className='inner-card'>
          <div className="preview-info-sec">
                      <p className="label">Name:</p>
                      <p className="field">{film.title}</p>
                    </div>
                    <div className="preview-info-sec">
                      <p className="label">Director:</p>
                      <p className="field">{film.director}</p>
                    </div>
            <button className='moreinfo-btn' onClick={() => handleMoreInfoClick(film)}>More Info</button>
            </div>
        </li>
      ))
    }
  </ul>
</div>
{page < maxPage && <button className='loadmore-btn'  onClick={handleLoadMore}>Load More</button>}

{/* Modal */}
{showModal && <Modal closeModal={setShowModal} data={selectedFilm}/>}
      </>
    )
  }
  
  export default Films
  
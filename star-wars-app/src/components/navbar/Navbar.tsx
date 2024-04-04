import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import searchLogo from '../../assets/images/icons8-search-48.png';
import { useEffect } from 'react';
function Navbar() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/people');
  }, [navigate]); 

  return (
    <div className='nav-sec'>
        <div className='logo-sec'>
        </div>
        <div>
        <ul className='sw-list'>
            <li><Link className='nav-item' to='/people'>People</Link></li>
            <li><Link className='nav-item' to='/films'>Movies</Link></li>
            <li><Link className='nav-item' to='/planets'>Planets</Link></li>
            <li><Link className='nav-item' to='/species'>Species</Link></li>
            <li><Link className='nav-item' to='/starships'>Starships</Link></li>
            <li><Link className='nav-item' to='/vehicles'>Vehicles</Link></li>
        </ul>
        </div>
        <div className='search-sec'>
            <input type="text" />
            <button>
              <img src={searchLogo}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar

import { Link } from 'react-router-dom'
import './Footer.css'
import starWarsLogo from '../../assets/images/icons8-star-wars-256.png'
function Footer() {

  return (
    <div className='footer-sec'>
        <div className='footer-top'>
            <div className='links-div'>
                <Link className='item' to='/people'>People</Link>
                <Link className='item' to='/films'>Movies</Link>
                <Link className='item' to='/planets'>Planets</Link>
                <Link className='item' to='/species'>Species</Link>
                <Link className='item' to='/starships'>Starships</Link>
                <Link className='item' to='/vehicles'>Vehicles</Link>
            </div>
        <div className='resource-sec'>
            <img src={starWarsLogo} alt="" />
            <div>
            <p className='footer-item'>resource:</p>
            <a href="https://swapi.dev/documentation#wookiee">SWAPI - The Star Wars API</a>
            </div>
        </div>
        </div>
        <div className='line-div'>

        </div>
        <div>
            <p className='copyright'>Copyright© 2023 Star Wars</p>
        </div>
    </div>
  )
}

export default Footer

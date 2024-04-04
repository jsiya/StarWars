import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import People from '../pages/people/People.tsx'
import Films from '../pages/films/Films.tsx'
import Vehicles from '../pages/vehicles/Vehicles.tsx'
import Planets from '../pages/planets/Planets.tsx'
import Starships from '../pages/starships/Starships.tsx'
import Species from '../pages/species/Species.tsx'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: '/films',
          element: <Films/>
        },
        {
          path: '/people',
          element: <People/>,
        },
        {
          path: '/planets',
          element: <Planets/>
        },
        {
          path: '/species',
          element: <Species/>
        },
        {
          path: '/starships',
          element: <Starships/>
        },
        {
          path: '/vehicles',
          element: <Vehicles/>
        },
      ]
    },
  ])
  
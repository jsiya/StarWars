import './App.css'
import Navbar from './components/navbar/Navbar.tsx'
//import { useAppDispatch } from './store/hooks.ts'
import { Outlet } from 'react-router-dom';

function App() {
  
  //const dispatch = useAppDispatch();
  
  return (
    <div className='main'>
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}

export default App

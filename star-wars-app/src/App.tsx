import './App.css'
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/navbar/Navbar.tsx'
//import { useAppDispatch } from './store/hooks.ts'
import { Outlet } from 'react-router-dom';

function App() {
  
  //const dispatch = useAppDispatch();
  
  return (
    <div className='main'>
      <Navbar></Navbar>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App

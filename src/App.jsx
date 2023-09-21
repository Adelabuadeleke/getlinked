import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  Route,
  BrowserRouter as Router,
  Routes,

} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Register from './pages/Register';



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App

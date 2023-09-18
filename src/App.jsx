import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// pages
import Home from './pages/Home';
import { 
  Route,
  BrowserRouter as Router,
  Routes,

} from 'react-router-dom';


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App

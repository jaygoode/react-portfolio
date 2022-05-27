import React, { useState } from 'react'
import olalogo from '../../assets/images/olalogo.jpg'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Welcome, <br /> to the Ostrobothnia LAN association web page
          <img src={olalogo} alt="OLAlogo" />
        </h1>
        <h2>For gamers / By gamers</h2>
        <Link to="/contact" className="flat-button">
          GET IN TOUCH
        </Link>
      </div>
    </div>
  )
}

export default Home

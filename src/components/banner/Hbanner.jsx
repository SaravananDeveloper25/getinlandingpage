// import {useState,useEffect} from 'react'
import { images } from '../../config/images'
import './banner.css'
import Redbutton from '../buttons/redbutton'

function Hbanner() {

  return (
    <div>
      <div className='banner'>
        <div className='logo'>
          <img src={images.logo} alt="" />
          <h2>Getin <span>Technologies</span> </h2>
        </div>
        <div className="banner-content">
          <h3>India's #1 Training Institute
          </h3>
          <h1><span className='learn'>Learn.</span> <span className='Build'>Build.</span> <span className='get'>Get Job.</span> </h1>
          <p>50,000+ uplifted through our hybrid classroom & online training,
            enriched by real-time projects and job support.</p>
        </div>
        <div className='banner-buttons'>
          <Redbutton />
          </div>
      </div>

    </div>
  )
}

export default Hbanner
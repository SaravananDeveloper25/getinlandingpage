import React from 'react'
import './carrer.css'
import { images } from '../../config/images'
function CarrerP() {
    return (
        <div className='pla'>
            <div className="ct">
            <p className='p1'>Your Path to a Successful IT Career</p>
            <p>Our Alumni Work at Top Compaines</p>
            </div>
            <div className="ci">
                <img src={images.cam} alt="" />
                <img src={images.co} alt="" />
                <img src={images.de} alt="" />
                <img src={images.dell} alt="" />
                <img src={images.dxc} alt="" />
                <img src={images.hcl} alt="" className='hide'/>
                <img src={images.inf} alt="" className='hide'/>
                <img src={images.lti} className='hide' alt="" />
                <img src={images.sam} className='hide' alt="" />
 
            </div>
 
        </div>
    )
}

export default CarrerP
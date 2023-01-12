import React from 'react';
import Page from "../components/page"
import './Page3.css'
import img from './snazzy-image.png'
import Location from './location-icon.svg'

const Page3 = () => {
  return <Page>
    <div className='farji-div'></div>
    <div className='page-3' >
    <img src={Location} alt='location-icon' className='location-icon'/>  
    <div className='location'>
    <span className='location-1'>LOCATION</span>
      <span className='location-2'>
        <span>12 Upper St. Martin’s Lane</span>  
       <span> WC2H 9FB, London</span>  
      </span>  
    </div>  
    <img className='page-3-img' src={img} alt='map'/>
    </div>
  
  </Page>;
}

export default Page3;
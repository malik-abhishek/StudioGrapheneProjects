import React from 'react';
import Page from '../components/page';
import Img from './page1.jpg'
import logo from './stamp.png'
import './Page1.css'

const Page1 = () => {
  return (
    <Page>
      <div className='bg-img'>
        <div className="logo-pic">
          <img src={logo} alt='logo-pic' />
        </div>

        <div className='center-div'>
          <span className='one'>THE BEST FOODIE</span>
          <span className='two'>EXPERIENCE</span>
          <span className='three'>NOW IN LONDON</span>
        </div>
        <div>

          <span className='right-side'>REQUEST INFO</span>

        </div>
      </div>
    </Page>
  );
}

export default Page1;
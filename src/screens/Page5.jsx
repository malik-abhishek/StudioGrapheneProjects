import React from 'react';
import Page from "../components/page"
import starImg from './star.png'
import './Page5.css'
import card1 from './card-1.png'
import arrow from './arrow.png'
import pineapple from './pineapple.png'
import card3 from './card3.png'
import card4 from './card4.png'
import chef from './chef.png'
import next from './next.svg'


const Page5 = () => {
  return (<Page>
    <div className='page-5'>
      <div className='heading-5'>
       <div className='left-heading'>
         <span className='left-heading-1'>POPULAR</span>
         <span className='left-heading-2'>RECIPES</span>
         <span className='left-heading-3'>SEE ALL</span>
       </div>
        <div className='right-heading'>
         <span className='right-heading-1'>DO YOU WANT TO SHARE YOUR OWN RECIPE?</span>
         <span className='left-heading-3'>SEND IT NOW</span> 
        </div>
      </div>
       
      <div className='cards-section'>
     
           <img src={chef} className='logo-one'/>
        <div className='card-1'>
          
          <div className='img-div-1'> 
           < img src={card1} alt='card'/>
            <button id="close-image-1" ><img src={arrow} alt='arrow'/> 
           </button>
          </div>  
          <div className='card-text'>
            <div className='difficulty'>DIFFICULTY</div>
            <span className='card-heading' >CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST</span>
            <div className='card-discription'>Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…</div>
          </div>
        </div>
        
        <div className='card-2'>
          <div className='img-div'>
         <img src={pineapple} alt='card-pineapple'/>  
          <button id="close-image" ><img src={arrow} alt='arrow'/> 
          </button>  
          </div>  
          <div className='card-text'>
            <div className='difficulty'>DIFFICULTY</div>
            <span className='card-heading' >PINEAPPLE FRUIT SALAD WITH FRESH CREAM</span>
            <div className='card-discription'>The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno…</div>
          </div>
        </div>
        
            <img src={chef} className='logo-two'/>
         <div className='card-2-odd'> 
          <div className='img-div'>
         <img src={card3} alt='card-pineapple'/>  
          <button id="close-image" ><img src={arrow} alt='arrow'/> 
          </button>  
          </div>  
          <div className='card-text'>
            <div className='difficulty'>DIFFICULTY</div>
            <span className='card-heading' >CHEESE, SPINACH & MUSHROOM STUFFED CHICKEN</span>
            <div className='card-discription'>Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into chicken</div>
          </div>
        </div>

          <div className='card-2'>
         <div className='img-div'>
         <img src={card4} alt='card-pineapple'/>  
          <button id="close-image" ><img src={arrow} alt='arrow'/> 
          </button>  
          </div> 
          <div className='card-text'>
            <div className='difficulty'>DIFFICULTY</div>
            <span className='card-heading' >FETA AND PEACH COUSCOUS</span>
            <div className='card-discription'>Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...</div>
          </div>
        </div>
      </div>
    </div>
      </Page>);
}

export default Page5;
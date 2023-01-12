import React from 'react';
import Page from "../components/page"
import starImg from './star.png';
import './page6.css';
import facebook from './facebook-icon.svg'
import Instagram from './instagram-icon.svg'
import LinkedIN from './Linkedin-icon.svg'
import twitter from './twitter-icon.svg'

const Page6 = () => {
  return (<Page>
      <div className='main-container-6'>
       <div className='section-1'>
         <div className='left-side-6'>
           <span className='span-1'>COLLABORATE </span>
           <span className='span-2'>WITH US</span>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
         </div>
         <div className='left-side-1'>
           <div ><img src={starImg} alt='star-ing'/></div>
         <div className='lower-div'>
           <span>
           <label htmlFor="fname">FIRST NAME:</label><br/>
           <input type='text'name='fname'/><br/>
           </span>  
           <span>
           <label htmlFor="Sname">SURNAME NAME:</label><br/>
           <input type='text'name='Sname'/><br/>
            </span>
           <span>
           <label htmlFor="phone">PHONE:</label><br/>
            <input type='number'name='phone'/><br/>
            </span>
           <span>
             <label htmlFor="email">EMAIL:</label><br/>
            <input type='number'name='email'/><br/>
            </span>
           <span>
             <label htmlFor="experience">EXPERIENCE:</label><br/>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
             </span>
           <span>
            <label htmlFor="experience">WHERE DID YOU HERE ABOUT US?</label><br/>
            <select>
              <option>LinkedIN</option>
              <option>Glassdoor</option>
              <option>InternShala</option>
              <option>Naukri</option>
            </select>
           </span>  
           <span>
           </span>
              <span className='btn-span' >
             <button className='btn-6' >SEND</button>
              </span>
         </div>
         </div>
       </div>
       <div className='section-2'>
         <div className='sub-section-1'>
               <div className='page-6-subsection'>
                <div>
                  <span>SECTION 1</span>
                  <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                </div>
                 <div>
                  <span>SECTION 2</span>
                  <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                </div>
                 <div>
                  <span>SECTION 3</span>
                  <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                </div>
                 <div>
                  <span>SECTION 4</span>
                  <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                </div>
                <div>
                  <span>SECTION 5</span>
                  <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                   <span>Subsection</span>
                </div>
               
               </div>
               <div className='page-6-logo'>
               <span>THIS IS THE </span>
               <span>LOGO</span>  
               </div>
         </div>
         <div className='subsection-2'>
           <div>
           <span>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</span>
           </div>
           <div>
           <span><img src={facebook} alt='fb-icon'/></span>
           <span><img src={Instagram} alt='Insta-icon'/></span>
           <span><img src={LinkedIN} alt='LinkedIn-icon'/></span>
           <span><img src={twitter} alt='twitter-icon'/></span>
           </div>
         </div>
       </div> 
      </div>
     </Page>);
}

export default Page6;
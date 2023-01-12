import React from 'react';
import Page from "../components/page"
import './Page4.css'

const Page4 = () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { setVisible(entry.isIntersecting) });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (<Page>
    <div className="main-container" ref={domRef} >
      <div className="heading-container">
        <span className='main-heading'>OUR MENU</span>
        <span className='main-subheading'>KNOW MORE</span>
      </div>


      <div className='second-container'>
        <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}

        >
          <div className='sub-container'>
            <div className='item'>
              <div className='heading'>STARTERS</div>
              <div className='sub-heading'>QUINOA
                CROQUETTIAS</div>
              <span className='content'>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa </span>
              <button className='button-page4'>£4.95</button>
            </div>



            <div className='item'>
              <div className='sub-heading'>CHIFA
                CHICHARRONES</div>
              <span className='content'> Slow cooked, crispy pork belly with sweet soy sauce</span>
              <button className='button-page4'>£6.95</button>

            </div>

            <div className='item'>
              <div className='sub-heading'>CALAMERS</div>
              <span className='content'>  Crispy baby squid with pickled jalape&#xf1o miso salsa</span>
              <button className='button-page4'>£4.95</button>
            </div>
          </div>
        </div>
        <div
          className={`fade-out-section ${isVisible ? 'is-visible' : ''}`}

        >
          <div className='sub-container'>

            <div className='heading'>MAIN COURSES</div>
            <div className='item'>
              <div className='sub-heading'>EL CLASICO</div>
              <span className='content'>Sea bass caviche with aji limo tiger's, sweet potato pur&#69e, choclo corn, red onion,     coriander & plantain (gf) </span>
              <button className='button-page4'>£8.95</button>
            </div>

            <div className='item'>
              <div className='sub-heading'>TIRADITO
                CALLAO</div>
              <span className='content'>Cobia tiradito with coriander tiger's milk, black tobika, cr&#69me fraiche & sweet     potato crunchies</span>
              <button className='button-page4'>£8.95</button>
            </div>

          </div>
        </div>
        <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}

        >
          <div className='sub-container'>
            <div className='heading'>SIDES</div>
            <div className='item'>
              <div className='sub-heading'>SUPER POLLO</div>
              <span className='content'>Marinated corn fed chicken pieces with rocotto salsa </span>
              <button className='button-page4'>£4.95</button>
            </div>

            <div className='item'>
              <div className='sub-heading'>PATATAS
                FRITAS</div>
              <span className='content'>Sweet potato fries with aji rocotto mayonnaise(v)</span>
              <button className='button-page4'>£3.95</button>
            </div>

          </div>
        </div>
        <div
          className={`fade-out-section ${isVisible ? 'is-visible' : ''}`}

        >
          <div className='sub-container'>
            <div className='heading'>DESSERTS</div>
            <div className='item'>
              <div className='sub-heading'>ICECREAM</div>
              <span className='content'>Lorem ipsum dolor sit amet selerm a petrum sea</span>
              <button className='button-page4'>£3.95</button>
            </div>

            <div className='item'>
              <div className='sub-heading'>TIRAMISU</div>
              <span className='content'>Lorem ipsum dolor sit amet selerm a petrum sea</span>
              <button className='button-page4'>£3.95</button>
            </div>

            <div className='item'>
              <div className='sub-heading'>CHOCOLATE
                BROWNIE</div>
              <span className='content'>Lorem ipsum dolor sit amet selerm a petrum sea</span>
              <button className='button-page4'>£3.95</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Page >);

}

export default Page4;

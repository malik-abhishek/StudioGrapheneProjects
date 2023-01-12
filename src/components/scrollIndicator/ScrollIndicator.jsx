import React, { useState, useEffect } from "react";
import './ScrollIndicator.css'

const ScrollIndicator = ({ pages }) => {
  const max = pages.length;
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const Scrolled = document.documentElement.scrollTop;
      const MaxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const ScrollPercent = (Scrolled / MaxHeight) * 100;
      if (ScrollPercent <= 0) setScroll(1);
      else if (ScrollPercent >= 100) setScroll(max);
      else setScroll(Math.ceil(ScrollPercent / (100 / (max - 1))));
      // console.log(Math.ceil(ScrollPercent / (100 / (max - 1))))
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);
  return (
    <div className='left-side' >
      {
        pages.map((_, index) => {
          if (index + 1 == scroll) {
            return (
              <div key={index} className='element'>{String(scroll).padStart(2, '0')}</div>
            )
          } else {
            return (
              <div key={index} className='element' />
            )
          }
        })

      }
    </div>
  );
};

export default ScrollIndicator;
import React from 'react'
import './Sponsor.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Sponsor = () => {
    useEffect(() => {
		Aos.init({
			duration: 800,
    		easing: 'ease-in-out',
		});
	  }, []);
  return (
    <div className='outersponsor'>
        <h3 id='heading' data-a0s="zoom">Sponsors</h3>

        <div className='sponsorsbox'>
            <div className='sponsor' data-aos="fade-up">
                <h2>Associate partner</h2>
                <img src='https://upload.wikimedia.org/wikipedia/en/a/a1/Figaro%27s_logo.png'  id='img1' ></img>
            </div>
        </div>
        
      
    </div>
  )
}

export default Sponsor

import React from 'react'
import './Timeline.scss'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Timeline = () => {
    useEffect(() => {
		Aos.init({
			duration: 800,
    		easing: 'ease-in-out',
		});
	  }, []);
    return (
        <div className='boxtimeline'>
            <h3 class="h3">Timeline</h3>
            <ul class="timeline">
            <li>
                    <div data-aos="fade-up">
                        <div className="flag-wrapper roundbox">
                            <span class="flag special">Round 1</span>
                            {/* <span class="time-wrapper"><span class="time">2013 - present</span></span> */}
                        </div>
                        {/* <div class="desc">Registrations and Submission round start</div> */}
                    </div>
                </li>
                <li>
                    <div class="direction-r" data-aos="fade-left">
                        <div class="flag-wrapper">
                            <span class="flag">28th December 2023</span>
                            {/* <span class="time-wrapper"><span class="time">2013 - present</span></span> */}
                        </div>
                        <div class="desc">Registrations and Submission round start</div>
                    </div>
                </li>

                <li>
                    <div class="direction-l" data-aos="fade-right">
                        <div class="flag-wrapper">
                            <span class="flag">26th January 2024</span>
                            {/* <span class="time-wrapper"><span class="time">2011 - 2013</span></span> */}
                        </div>
                        <div class="desc">Registrations and Submission round ends</div>
                    </div>
                </li>


                <li>
                    <div class="direction-r" data-aos="fade-left">
                        <div class="flag-wrapper">
                            <span class="flag">31st January 2024</span>
                            {/* <span class="time-wrapper"><span class="time">2008 - 2011</span></span> */}
                        </div>
                        <div class="desc">Shortlisted teams announcement</div>
                    </div>
                </li>
                <li>
                    <div data-aos="fade-up">
                        <div className="flag-wrapper roundbox">
                            <span class="flag special">Round 2</span>
                            {/* <span class="time-wrapper"><span class="time">2013 - present</span></span> */}
                        </div>
                        {/* <div class="desc">Registrations and Submission round start</div> */}
                    </div>
                </li>
                <li>
                    <div class="direction-l" data-aos="fade-right">
                        <div class="flag-wrapper">
                            <span class="flag">9th February 2024</span>
                            {/* <span class="time-wrapper"><span class="time">2008 - 2011</span></span> */}
                        </div>
                        <div class="desc">Problem statement preference form release</div>
                    </div>
                </li>

                <li>
                    <div class="direction-r" data-aos="fade-left">
                        <div class="flag-wrapper">
                            <span class="flag">10th-11th February 2024</span>
                            {/* <span class="time-wrapper"><span class="time">2008 - 2011</span></span> */}
                        </div>
                        <div class="desc">Grand Finale at Sardar Patel Institute of Technology</div>
                    </div>
                </li>

            </ul>

        </div>
    )
}

export default Timeline

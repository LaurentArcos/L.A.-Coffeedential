import React from 'react'

import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className='about'>
      
      <img className='about-image' src={about} alt="About"/>
      
      <div className='about-text'>
        <h2 className='about-text-h2'>
          <span className='about-text-h2-span1'>Strong Coffee, Strong Roots</span>
          <span className='about-text-h2-span2'>About Our Cafe</span>
        </h2>
        <p className='about-text-p1'>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from artisan farmers in various regions of South and Central America. We are dedicated to travelling the world, finding the best coffee, and bringing back to you here in our cafe.</p>
        <p className='about-text-p2'>We guarantee that you will fall in lust with our decadent blends the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.</p>
      </div>
    
    </div>
  )
}

export default About
import React from 'react'
import { NavLink } from 'react-router-dom';

import barista from '../assets/intro.jpg';

const Home = () => {
  return (
    <div className='homepage'>

      <div className='homepage-top'>
        <img className='homepage-top-image' src={barista} alt="Barista"/>
        <div className='homepage-top-text'>
          <h2 className='homepage-top-text-h2'>
            <span className='homepage-top-text-h2-span1'>Fresh Coffee</span>
            <span className='homepage-top-text-h2-span2'>Worth Drinking</span>
          </h2>
          <p className='homepage-top-text-p'>Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
          </p>
          <div>
          <NavLink to="/store">
          <p className='homepage-top-text-link'>Passez nous voir !</p>
          </NavLink>
          </div>
       </div>
      </div>
    

      <div className='homepage-bottom'>
        <h2 className='homepage-bottom-h2'>
          <span className='homepage-bottom-h2-span1'>Our Promise</span>
          <span className='homepage-bottom-h2-span2'>To You</span>
        </h2>
        <p className='homepage-bottom-p'>When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
      </div>

    </div>
  )
}

export default Home
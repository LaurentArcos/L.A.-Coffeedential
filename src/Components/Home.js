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
        <div className='homepage-bottom-inner'>
          <h2 className='homepage-bottom-h2'>
            <span className='homepage-bottom-h2-span1'>Ce que nous faisons</span>
            <span className='homepage-bottom-h2-span2'>POUR VOUS</span>
          </h2>
          <p className='homepage-bottom-p'>
          Que vous veniez chez nous pour démarrer votre journée ou pour une pause gourmande, nous vous garantissons un service chaleureux et amical, dans une atmosphère accueillante et bienveillante, et par dessus tout, d'excellents produits préparés avec des ingrédients de la plus grande qualité. Si toutefois vous n'êtes pas satisfait.e.s, faîtes-le nous savoir et nous mettrons tout en oeuvre pour continuer à nous améliorer !
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home
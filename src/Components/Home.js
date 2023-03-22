import React from 'react'
import { NavLink } from 'react-router-dom';

import barista from '../assets/intro.jpg';

const Home = () => {
  return (
    <div className='homepage'>

      <div className='homepage-top'>
        <img className='homepage-top-image' src={barista} alt="Barista"/>
        <div className='homepage-top-text'>
          <div className='homepage-top-text-group'>
            <h2 className='homepage-top-text-h2'>
              <span className='homepage-top-text-h2-span1'>Le Café</span>
              <span className='homepage-top-text-h2-span2'>Que vous<br/>méritez</span>
            </h2>
            <p className='homepage-top-text-p'>Chaque tasse de nos cafés à la préparation artisanale commence par des ingrédients éco-responsables et sélectionnés avec soin. Essayez nos cafés et ils deviendront vite un rendez-vous incontournable de vos morning routines et de vos petits moments de détente et de plaisir - Nous vous le garantissons !
            </p>
          
          <div>
          <NavLink to="/store">
          <p className='homepage-top-text-link'>Passez Nous Voir !</p>
          </NavLink>
          </div>
          </div>
       </div>
      </div>
    

      <div className='homepage-bottom'>
        <div className='homepage-bottom-inner'>
          <h2 className='homepage-bottom-h2'>
            <span className='homepage-bottom-h2-span1'>Ce que nous faisons</span>
            <span className='homepage-bottom-h2-span2'>POUR VOUS</span>
          </h2>
          <p className='homepage-bottom-p1'>
          Que vous veniez chez nous pour démarrer votre journée, pour une pause gourmande ou un moment de détente entre ami.e.s, nous vous garantissons un service chaleureux et amical, dans une atmosphère accueillante et bienveillante. Mais par dessus tout, nos équipes ont à coeur de vous proposer des produits d'excellence, préparés avec des ingrédients de la plus grande qualité sélectionnés avec soin. Nous cherchons sans cesse à nous améliorer donc n'hésitez pas à nous partager vos remarques et conseils ! 
          </p>
          <p className='homepage-bottom-p2'>
          A bientôt !
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home
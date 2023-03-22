import React from 'react'

import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className='about'>
      
      <img className='about-image' src={about} alt="About"/>
      
      <div className='about-text'>
        <h2 className='about-text-h2'>
          <span className='about-text-h2-span1'>aux origines</span>
          <span className='about-text-h2-span2'>Nous et notre café</span>
        </h2>
        <p className='about-text-p1'>Ouvert en 1985, notre établissement a servi du café et des produits de qualité, achetés auprès de producteurs artisanaux et éco-responsables en Amérique Latine et en Afrique mais également auprès de producteurs locaux. Nous nous attachons à parcourir le monde à la recherche du meilleur café et des meilleurs produits pour nos viennoiseries et pâtisseries.</p>
        <p className='about-text-p2'>Nous garantissons que vous serez séduit.e.s par nos savoureux mélanges de cafés dès la première gorgée. Venez nous rejoindre pour accompagner vos morning routines, vos sorties entre ami.e.s ou simplement profiter d'un bon café et d'une pâtisserie en solitaire.</p>
      </div>
    
    </div>
  )
}

export default About
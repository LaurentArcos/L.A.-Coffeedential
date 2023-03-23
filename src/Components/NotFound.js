import React from 'react'
import { NavLink } from 'react-router-dom';

import sacs from '../assets/products-03.jpg';

const NotFound = () => {
  return (
    <div className='notfound'>

      <img className='notfound-image' src={sacs} alt="sacs de grains"/>
      
      <div className='notfound-text'>
        <h2 className='notfound-text-h2'>
          <span className='notfound-text-h2-span2'>Oups</span>
          <span className='notfound-text-h2-span1'>On dirait que vous êtes perdu.e.s ?</span>
        </h2>
        <NavLink to="/">
          <p className='notfound-link'>Pas de panique !<br/> cliquez ici pour un bon café !</p>
        </NavLink>
      </div>
   
    </div>
  )
}

export default NotFound
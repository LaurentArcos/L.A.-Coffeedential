import React from 'react'


import cafe from '../assets/products-01.jpg';
import croissant from '../assets/products-02.jpg';

const Products = () => {
  return (
    <div className='products'>
      
      <h2 className='products-cafe-titles'>
        <span className='products-cafe-titles-span1'>Préparés à la perfection</span>
        <span className='products-cafe-titles-span2'>cafés et thés</span>
      </h2>

      <img className='products-cafe-image' src={cafe} alt="café"/>

      <p className='products-cafe-p'>Nous en sommes fiers et il y a de quoi !  Pour chaque commande nous vous garantissons une expérience inoubliable.  Que ce soit pour notre mondialement célèbre Capuccino du Vénézuela, pour un rafraîchissant thé glacé aux fruits rouges ou pour un simple café noir, vous en redemanderez !</p>


      <h2 className='products-patisserie-titles'>
        <span className='products-patisserie-titles-span1'>Délicieux et sains</span>
        <span className='products-patisserie-titles-span2'>sucré ou salé ?</span>
      </h2>

      <img className='products-patisserie-image' src={croissant} alt="croissant"/>

      <p className='products-patisserie-p'>Nos menus saisonniers proposent, d'incroyables pâtisseries et viennoiseries préparées sur place mais également des snacks délicieux et des plats préparés avec soin tous les repas de la journée. Nous achetons autant que possible nos ingrédients chez des producteurs locaux et éco-responsables mais également chez des fournisseurs reconnus et spécialisés.</p>

    </div>
  )
}

export default Products
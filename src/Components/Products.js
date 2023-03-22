import React from 'react'


import cafe from '../assets/products-01.jpg';
import croissant from '../assets/products-02.jpg';

const Products = () => {
  return (
    <div className='products'>
      
      <h2 className='products-cafe-titles'>
        <span className='products-cafe-titles-span1'>Blended to Perfection</span>
        <span className='products-cafe-titles-span2'>Coffees & Teas</span>
      </h2>

      <img className='products-cafe-image' src={cafe} alt="café"/>

      <p className='products-cafe-p'>We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>


      <h2 className='products-patisserie-titles'>
        <span className='products-patisserie-titles-span1'>Delicious Treats, Good Eats</span>
        <span className='products-patisserie-titles-span2'>Bakery & Kitchen</span>
      </h2>

      <img className='products-patisserie-image' src={croissant} alt="croissant"/>

      <p className='products-patisserie-p'>Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p>

    </div>
  )
}

export default Products
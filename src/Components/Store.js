import React from 'react'

const Store = () => {

  const weekDay = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
  ];

let newDay = new Date();
let currentDay = newDay.getDay(); 


  return (
    
    <div className='store'>
      <div className='store-inner'>
        
        <h2 className="store-titles">
          <span className="store-titles-span1">passez nous voir</span>
          <span className="store-titles-span2">Nous sommes ouverts</span>
        </h2>

      {weekDay.map ((day) => {
        return (
          <div className='store-horaires'>
            <span className={weekDay.indexOf(day) === (currentDay-1) ? "store-horaires-day" : ""} key={day}>
              {day}  
            </span>
            <span className={weekDay.indexOf(day) === (currentDay-1) ? "store-horaires-heure" : ""} >
              {day === 'Samedi' || day === 'Dimanche' ? ' de 9h00 à 17h' : ' de 7h00 à 20h'}
            </span>
            
          </div> 
        )})}

        <div className='store-adresse'>
          <p className='store-adresse-rue'>117 avenue JJ Perron</p>
          <p className='store-adresse-ville'>83400 Hyères Les Palmiers</p>
        </div>

        <div className='store-telephone'>
          <p className='store-telephone-titre'>Appelez nous</p>
          <p className='store-telephone-numero'>04 94 65 30 30</p>
        </div>
        
      </div>
     </div>
  )
 
}

export default Store
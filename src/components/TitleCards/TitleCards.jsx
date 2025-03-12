import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'




const TitleCards = ({title, category}) => {



  const cardsRef = useRef();

const handleWheel = (event)=> {
  event.preventDefault;
  cardsRef.current.scroolLeft += event.deltaY
}

useEffect(() => {
  cardsRef.current.addEventListener('wheel', handleWheel)
}, [])
 
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular On Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {card_data.map((card, index) =>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards

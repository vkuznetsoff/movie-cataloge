import { useState } from 'react'
import Filter from '../Filter'
import MovieCard from './MovieCard'

const Catalog = ({ cards, search }) => {
  return (
    <>
      <div className='catalog'>
        {cards.map((card) => {
          return <MovieCard card={card} key={card.imdbID} />
        })}
      </div>
    </>
  )
}

export default Catalog

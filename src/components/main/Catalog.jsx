import MovieCard from './MovieCard'

const Catalog = ({ cards }) => {
  return (
    <div className='catalog'>
      {cards.map((card) => {
        return <MovieCard card={card} key={card.imdbID} />
      })}
    </div>
  )
}

export default Catalog

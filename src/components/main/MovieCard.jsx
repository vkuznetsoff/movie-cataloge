const MovieCard = ({ card }) => {
  const { Title, Poster, imdbID, Type, Year } = card

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={Poster} alt='poster' />
      </div>

      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {Title}
        </span>
        <p>
          {Year} <span className='right'>{Title}</span>
        </p>
      </div>
    </div>
  )
}

export default MovieCard

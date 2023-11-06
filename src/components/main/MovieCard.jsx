const MovieCard = ({card}) => {
  const {Title, Poster} = card
  debugger
  return (
    <div className="row">
      <div class="card">
        <div class="card-image">
          <img src={Poster} />
          <span class="card-title">{Title}</span>
          {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
        </div>
        
        <div class="card-content">
          <p>Description</p>
        </div>
      </div>
    </div>

  )
}

export default MovieCard
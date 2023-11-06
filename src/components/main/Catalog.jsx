import MovieCard from "./MovieCard"

const Catalog = ({cards}) => {
    
    return (
        <div className="catalog">
            {
                cards.map((card) => {
                    return <MovieCard card={card} />
                })
            }

                
                {/* <MovieCard />
                <MovieCard />
                <MovieCard /> */}
            </div>

        
    )
}

export default Catalog
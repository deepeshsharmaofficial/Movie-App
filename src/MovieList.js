import MovieCard from "./Moviecard";

function MovieList(props) {

        const {movies, addStar, decStar, toggleFav, addToCart} = props;
        
        return (
            <>
            {movies.map((movie, index) =>(
              <MovieCard movies = {movie} 
                         key = {index}
                         addStar= {addStar}
                         decStar = {decStar}
                         addToCart = {addToCart}
                         toggleFav = {toggleFav}/>
              ))}

            {/* <MovieCard title={title} 
                        plot={plot} 
                        price={price}
                        rating = {rating}
                        stars = {stars}
                        fav = {fav}
                        cart = {cart}/>
            </> */}
            {/* We Can directly pass there */}
            {/* <MovieCard movies = {this.state}/> */}

            </>
        )

}
export default MovieList;
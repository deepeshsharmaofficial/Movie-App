import {Component} from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
    /*
      We are actually hardcoding every movie-card.
      We need to find a way to actually get rid of this Hardcoding.
      React say "If you want to store any information or data of the component make use of states."
    */

    constructor() {
        super();
        this.state = {
            movies : [
                {
                  title: 'The Avengers',
                  plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',
                  price: 198,            
                  star: 0,
                  fav: false,
                  cart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',
                  price: 139,
                  star: 0,      
                  fav: false,
                  cart: false                  
                }]
        }
        // this.addStars = this.addStars.bind(this);
    }

    handleAddStar = (movie) => {
      const {movies} = this.state;

      // const movieId = this.state.movies.indexOf(movie);
      const movieId = movies.indexOf(movie);

      if (movies[movieId].star < 5) {
        movies[movieId].star += 0.5;
      }

      this.setState({
        movies: movies
      })
    }

    handleDecStar = (movie) => {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      if (movies[movieId].star > 0) {
        movies[movieId].star -= 0.5;
      }

      this.setState({
        movies: movies
      })
    }

    handleAddToCart = (movie) => {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      movies[movieId].cart = !movies[movieId].cart;

      this.setState({
        movies: movies
      })
    }

    handleToggleFav = (movie) => {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      movies[movieId].fav = !movies[movieId].fav;

      this.setState({
        movies: movies
      })
    }

    render() {
        // const { title, plot, price, rating, stars, fav, cart } = this.state;
        
        const {movies} = this.state;
        return (
            <>
            
            {/* {this.state.movies.map((movie) => <MovieCard movies = {movie} />)} */}

            {/* Otherwise We can destructured it */}
            {movies.map((movie, index) =>(
              <MovieCard movies = {movie} 
                         key = {index}
                         addStar= {this.handleAddStar}
                         decStar = {this.handleDecStar}
                         addToCart = {this.handleAddToCart}
                         toggleFav = {this.handleToggleFav}/>
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
            {/*<MovieCard movies={this.state} />*/}

            </>
        )

    }
}

export default MovieList;
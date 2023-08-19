import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesdata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
    // this.addStars = this.addStars.bind(this);
  }

  handleAddStar = (movie) => {
    const { movies } = this.state;

    // const movieId = this.state.movies.indexOf(movie);
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star < 5) {
      movies[movieId].star += 0.5;
    }

    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].star > 0) {
      movies[movieId].star -= 0.5;
    }

    this.setState({
      movies: movies,
    });
  };

  handleAddToCart = (movie) => {
    let {movies, cartCount} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].cart = !movies[movieId].cart;

    if (movies[movieId].cart) {
      cartCount = cartCount + 1;
    } else {
      cartCount = cartCount - 1;
    }

    this.setState({
      movies: movies,
      cartCount: cartCount
    });
    console.log(cartCount);
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies: movies,
    });
  };

  render() {
    const {movies, cartCount} = this.state;

    return (
      <>
        <Navbar cartCount = {cartCount}/>
        <MovieList movies = {movies} 
                   addStar= {this.handleAddStar}
                   decStar = {this.handleDecStar}
                   addToCart = {this.handleAddToCart}
                   toggleFav = {this.handleToggleFav}
        />
      </>
    );
  }
}

export default App;
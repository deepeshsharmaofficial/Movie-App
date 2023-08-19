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
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].cart = !movies[movieId].cart;

    this.setState({
      movies: movies,
    });
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
    const {movies} = this.state;

    return (
      <>
        <Navbar />
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
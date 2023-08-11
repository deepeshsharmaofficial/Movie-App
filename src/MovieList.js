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
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            cart: false,
        };
        // this.addStars = this.addStars.bind(this);
    }

    addStars = () => {
        // console.log("this.state: ", this.state);
        // this.state.stars = this.state.stars + 0.5;

        if (this.state.stars >= 5) {
            return;
        }

        // 1st form of setState()
        // this.setState({
        //     stars: this.state.stars + 0.5
        // });

        // 2nd form of setState()
        // this.setState((prevState) => ({ stars: prevState.stars + 0.5 }));
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5,
            };
        });
    };

    decStars = () => {
        if (this.state.stars <= 0) {
            return;
        }

        this.setState((prevState) => {
            return {
                // if (prevState.stars >= 0) {
                stars: prevState.stars - 0.5,
                // }
            };
        });
    };

    handleFav = () => {
        this.setState({
            fav: !this.state.fav,
        });
    };

    handleCart = () => {
        this.setState({
            cart: !this.state.cart,
        });
    };

    render() {
        const { title, plot, price, rating, stars, fav, cart } = this.state;
        return (
            <>
                {/* <MovieCard title={title} 
                        plot={plot} 
                        price={price}
                        rating = {rating}
                        stars = {stars}
                        fav = {fav}
                        cart = {cart}/>
            </> */}
                {/* We Can directly pass there */}
                <MovieCard movies={this.state} />
            </>
        )

    }
}

export default MovieList;
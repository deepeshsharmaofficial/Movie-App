import {Component} from "react";

class MovieCard extends Component {

/*
    We are actually hardcoding every movie-card.
    We need to find a way to actually get rid of this Hardcoding.
    React say "If you want to store any information or data of the component make use of states."
*/

    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot:"Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
        }
        // this.addStars = this.addStars.bind(this);
    }

    addStars = () => {
        console.log("this.state: ", this.state);
    }

    render() {
        const {title, plot, price, rating} = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"></img>
                    </div>

                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                alt="decrease" 
                                className="str-btn"/>

                                <img
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                alt="" 
                                className="stars"/>
                                
                                <img
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                                alt="increase" 
                                className="str-btn"
                                onClick={this.addStars}
                                />

                                <span>0</span>

                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Card</button>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
}

export default MovieCard;
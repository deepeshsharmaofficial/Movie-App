import {Component} from "react";

class MovieCard extends Component {

    render() {
        const {title, plot, price, rating, star, fav, cart, poster} = this.props.movies;
        
        // We can do it like that also
        // const {movies: data} = this.props;
        // const {title, plot, price, rating, stars, fav, cart} = data;
        
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster}></img>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                alt="decrease" 
                                className="str-btn"
                                onClick={() => {this.props.decStar(this.props.movies)}}
                                />

                                <img
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                alt="" 
                                className="stars"/>
                                
                                <img
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                                alt="increase" 
                                className="str-btn"
                                onClick={() => {this.props.addStar(this.props.movies)}}
                                />

                                <span>{star}</span>

                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : 
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}


                            <button className={fav ? "unfavourite-btn":"favourite-btn"}
                                    onClick={() => this.props.toggleFav(this.props.movies)}>
                                        {fav ? "Unfavourite":"Favourite"}
                            </button>

                            
                            <button className={cart ? "remove-cart-btn" : "cart-btn"} 
                                    onClick={() => this.props.addToCart(this.props.movies)}>
                                        {cart ? "Remove to Card" : "Add to Card"}
                            </button>

                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
}

export default MovieCard;
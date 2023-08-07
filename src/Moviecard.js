import {Component} from "react";

class MovieCard extends Component {
    render() {
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"></img>
                    </div>

                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">Supernatural power shown in the movie.</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                <img
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                alt="decrease" 
                                className="btn str-btn"/>

                                <img
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                alt="" 
                                className="stars"/>

                                <img
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                                alt="increase" 
                                className="btn str-btn"/>

                                <span>0</span>

                            </div>
                            <button className="btn favourite-btn">Favourite</button>
                            <button className="btn cart-btn">Add to Card</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default MovieCard;
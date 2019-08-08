import React, { Component } from "react";
import { Link } from "react-router-dom"


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <Link to={`/movie/${this.props.data.id}`}>
                <div className="movie-box">
                    <img className="img-movie" alt="movie" src={"https://image.tmdb.org/t/p/original/" + this.props.data.poster_path} />
                    <h3 className="title-movie">{this.props.data.title} </h3>
                </div>
            </Link>
        )
    }
}


export default Movie;
import React, { Component } from "react";
import {Link} from "react-router-dom"

const API_KEY = "aaac14e6ce98e6590f7e57b4e08e1c14";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        this.getMovies(this.props)
        
    };

    componentWillReceiveProps(nextProps) {
        this.getMovies(nextProps)
    }

    getMovies = () => {
        const id =  this.props.match.params.id;
        let fetchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data
                })
            })
    }

    render() {
        return (
            <div className="Modal">
                {this.state.movies
                    ? <div className="container-modal-complete">
                        <div className="container-modal">
                            <img className="img-movie-modal" alt="movie" src={"https://image.tmdb.org/t/p/original/" + this.state.movies.poster_path} />
                            <img className="img-backdrop" alt="banner-movie" src={"https://image.tmdb.org/t/p/original/" + this.state.movies.backdrop_path} />
                            <h3 className="title-movie-modal">{this.state.movies.title} </h3>
                            <p className="overview-movie">{this.state.movies.overview}</p>
                            
                            <Link to="/">
                            <div className="close-modal"> x </div>
                            </Link>
                        
                        </div>
                    </div>
                    : ""
                }
            </div>
        )
    }
}

export default Modal;
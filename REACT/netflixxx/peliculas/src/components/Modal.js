import React, { Component } from "react";
import Movie from "./Movie"

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
        const id = this.props.id;
        let direccionDeBusqueda = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        fetch(direccionDeBusqueda)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data
                })
            })
    }

    handleCross = e => {
        console.log("quiero cerrar")
    }


    render() {
        // console.log("SIDEBAR", this.props)
        // this.props.funcionDelPadre("caca")
        return (
            <div className="Modal">
                {this.state.movies
                    ? <div className="container-modal-complete">
                       
                        <div className="container-modal">
                            <img className="img-movie-modal" src={"https://image.tmdb.org/t/p/original/" + this.state.movies.poster_path} />
                            <img className="img-backdrop" src={"https://image.tmdb.org/t/p/original/" + this.state.movies.backdrop_path} />
                            <h3 className="title-movie-modal">{this.state.movies.title} </h3>
                            <p className="overview-movie">{this.state.movies.overview}</p>
                            <div className="close-modal" onClick={this.handleCross}> x </div>
                        </div>
                    </div>
                    : ""

                }
                {/* <h1> {this.props.id}</h1> */}



            </div>
        )
    }
}







export default Modal;
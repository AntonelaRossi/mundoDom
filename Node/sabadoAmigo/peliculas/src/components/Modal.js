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


    componentWillReceiveProps(nextProps) {
        const idMovie = nextProps.idMovie;

        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}`)

        
            .then(res => res.json())
            .then(data => {

                this.setState({
                    movies: data.results
                })
                // console.log(movies)
            })
            
    }

    render() {
        return (
            <div className="Modal">
                {/* <img className="img-Modal" src={"https://image.tmdb.org/t/p/original/" + this.props.data.results.poster_path}/> */}
                {/* <h3 className="title-Modal">{this.props.data.title} </h3>   */}
                {/* <p>{this.props.data.overview}</p>               */}
                hola
            </div>
        )
    }
}







export default Modal;
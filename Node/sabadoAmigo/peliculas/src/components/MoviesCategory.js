import React, { Component } from "react";
import Movie from "./Movie"

const API_KEY = "aaac14e6ce98e6590f7e57b4e08e1c14";

//este es un componente de clase(constructor) tiene logica, sirve cuando el componente interactua con apis, tiene ESTADOS 
class MoviesCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        // const category = this.props.category;
        const { props: { category}} = this; //DESTRUCTURING


        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        movies: data.results.slice(0,5)
                    })  
                })
    }

    render() {
        return (
            <div className="movies-container">
                <h2>{this.props.title}</h2>

                <div className="movies">
                    {this.state.movies.map(m => <Movie data={m}/>)}

                </div>

                {/* <Movie image="" title="" /> */}

            </div>
        )
    }
}


export default MoviesCategory;
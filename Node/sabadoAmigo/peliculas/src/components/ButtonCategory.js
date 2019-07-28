import React, { Component } from "react";
import Movie from "./Movie"

const API_KEY = "aaac14e6ce98e6590f7e57b4e08e1c14";

class ButtonCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        const category = this.props.category;

        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {

                this.setState({
                    movies: data.results
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        const category = nextProps.category;

        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {

                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        return (
            <div className="movies-container">
                <h2>
                    {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}                  
                </h2>

                <div className="movies">
                    {this.state.movies.map(m => <Movie handleModal={this.props.handleModal} data={m}/>)}

                </div>

                

            </div>
        )
    }
}


export default ButtonCategory;
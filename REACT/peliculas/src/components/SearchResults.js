import React, { Component } from "react";
import Movie from "./Movie"

const API_KEY = "aaac14e6ce98e6590f7e57b4e08e1c14";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidUpdate() {
        this.getResults(this.props)
    }

    componentDidMount() {
        this.getResults(this.props)
    };

    componentWillReceiveProps(nextProps) {
        this.getResults(nextProps)
    };

    getResults = () => {
        const query = this.props.match.params.query;

        let resultsUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        fetch(resultsUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        console.log("Array this state movies", this.state.movies)
        return (
            <div className="movies-results-container" >
                <h2>{this.props.title}</h2>

                <div className="movies">
                    {this.state.movies.map(m => <Movie data={m} />)}
                </div>
            </div>
        )
    }
}


export default SearchResults;
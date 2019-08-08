import React, { Component } from "react";
import Movie from "./Movie"

const API_KEY = "aaac14e6ce98e6590f7e57b4e08e1c14";

//este es un componente de clase(constructor) tiene logica, sirve cuando el componente interactua con apis, tiene ESTADOS 
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        const queryResults = this.props.queryResults;
        
         
         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryResults}`)
             .then(res => res.json()) 
             .then(data => {
 
                 this.setState({
                     movies: data.results
                 })
             })
     }

    componentWillReceiveProps(nextProps) {
       const queryResults = nextProps.queryResults;
       
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryResults}`)
            .then(res => res.json()) 
            .then(data => {

                this.setState({
                    movies: data.results
                })
            })
    }

    render() {
        return (
            <div className="movies-results-container" >

                <h2>{this.props.title}</h2>
                
                <div className="movies">
                    {this.state.movies.map(m => <Movie getId={this.props.getId} data={m}/>)}

                </div>

            </div>
        )
    }
}


export default SearchResults;
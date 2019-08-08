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

    componentDidUpdate() {
        this.getCategorys(this.props)
    }

    componentDidMount() {
        this.getCategorys(this.props)
    };

    componentWillReceiveProps(nextProps) {
        this.getCategorys(nextProps)
    }

    getCategorys = () => {
        const category = this.props.match.params.category;
        
        let categoryUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
        fetch(categoryUrl)
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
                        {this.props.match.params.category.charAt(0).toUpperCase() + this.props.match.params.category.slice(1)}
                    </h2>

                    <div className="movies">
                        {this.state.movies
                        ? this.state.movies.map(m => <Movie data={m} />)
                        : ""
                        } 
                        
                    </div>
                </div>           
        )
    }
}

export default ButtonCategory;
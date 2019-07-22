import React, {Component } from "react";

 
class Movie extends Component {
    constructor (props) {
        super (props);

    }

    render() {
        return (
            <div>
                <img className="img-movie" src={"https://image.tmdb.org/t/p/original/" + this.props.data.poster_path}/>
                <h3 className="title-movie">{this.props.data.title} </h3>  
                {/* <p>{this.props.data.overview}</p>               */}
            </div>
        )
    }

}


export default Movie;
import React, {Component } from "react";

 
class Movie extends Component {
    constructor (props) {
        super (props);
        this.state= {

        }
    } 

    handleClick = c => {
        console.log(this.props.data.id)
        this.setState({
            queEs: c.target,
            idMovie: this.props.data.id
         })
         const queEs = this.state.queEs
         const idMovie = this.state.idMovie
         console.log(queEs)
         console.log(idMovie)
        // this.props.handleModal(idMovie)
        
      
    }


    render() {
        return (
            <div className="movie-box"  >
                <img className="img-movie" onClick={this.handleClick} src={"https://image.tmdb.org/t/p/original/" + this.props.data.poster_path}/>
                <h3 className="title-movie">{this.props.data.title} </h3>  
                {/* <p>{this.props.data.overview}</p>               */}
            </div>
        )
    }

}


export default Movie;
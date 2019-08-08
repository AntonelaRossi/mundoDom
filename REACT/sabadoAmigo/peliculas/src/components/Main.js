import React, {Component } from "react";
import Hero from "./Hero"
import MoviesCategory from "./MoviesCategory"

//este es un componente de clase(constructor) tiene logica, sirve cuando el componente interactua con apis, tiene ESTADOS 
class Main extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <main>
                <Hero />
                
                <MoviesCategory category="popular" title="Popular" getId={this.props.getId} />
                <MoviesCategory category="top_rated" title="Top Rated" getId={this.props.getId}/>
                <MoviesCategory category="upcoming" title="Upcoming" getId={this.props.getId} />
                <MoviesCategory category="now_playing" title="Now Playing" getId={this.props.getId}/>

            </main>
        )
    }

}





export default Main
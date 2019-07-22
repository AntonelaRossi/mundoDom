import React from "react"


//como este componente solo tiene html no necesitamos hacer un constructor (componentes de clases)
// se llama componente de funcion
const Hero = props => {
        return (
            <div id="hero">
                <img className="img-hero" src="https://skydance.com/wp-content/uploads/2019/04/Featured-Terminator-min-1.png"/>
                <h1 className="h1-hero">NetFlix</h1>
                <p className="p-hero"> Buscador de peliculas</p>
            </div>
        )
}

export default Hero;

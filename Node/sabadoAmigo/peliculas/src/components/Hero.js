import React from "react"


//como este componente solo tiene html no necesitamos hacer un constructor (componentes de clases)
// se llama componente de funcion
const Hero = props => {
        return (
            <div id="hero">
                <img className="img-hero" src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/81589.jpg"/>
                <h1 className="h1-hero">NetFlix</h1>
                <p className="p-hero"> Buscador de peliculas</p>
            </div>
        )
}

export default Hero;

import React, {Component} from "react";
import {Redirect} from "react-router-dom"



// en este componente tenes que pasarle el id, de forma dinamica

// const Profile = props => {
//     return <h1> Profile </h1>

// } convertimos esto en componente de funcion

class Profile extends Component{
    constructor (props) {
        super(props);
        console.log(this.props.match.params);
        this.state= {
            goToHome: false,
        }
        
    }

    componentDidMount() {
        const {
            params: {
                id
            } 
        } = this.props.match;
        console.log(`viendo el perfil de ${id}`);
    }
    
    volver = () => {
        console.log("volver" , this )
        // this.props.history.push("/")
        this.setState({
            goToHome: true,
        })
    }

    render () {
        return <div>
            {this.state.goToHome && <Redirect to="/"/>}
            <h1>Profile de {this.props.match.params.id}</h1>
            <button 
                onClick={this.volver}
                >volver
            </button>
            
            </div>
    }
} 

export default Profile
import React, {Component } from "react";

class Navbar extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <div className="navbar">
                <img className="logo-navbar" src="http://www.comicgeekos.com/blog/wp-content/uploads/2018/11/Netflix-Logo-small-Transparent.png?w=640"/>
                
                <form>
                    <input className="form-navbar" type="text" placeholder="Buscá tu película" />
                </form>

                <div className="login">
                    login
                </div>

            </div>
        )
    }
}


export default Navbar;
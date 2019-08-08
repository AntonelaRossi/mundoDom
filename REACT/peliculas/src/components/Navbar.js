import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    handleChange = e => {
        console.log("e target value", e.target.value);
        this.setState({
            query: e.target.value
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        const query = this.state.query
        console.log("this state query", this.state.query)

        if (this.state.redirect) {
            return <Redirect to={`/search/${query}`} />
        }
    }

    render() {
        return (
            <div className="navbar">
                <Link to="/">
                    <img className="logo-navbar" alt="logo" src="http://www.comicgeekos.com/blog/wp-content/uploads/2018/11/Netflix-Logo-small-Transparent.png?w=640" />
                </Link>

                <form onSubmit={this.setRedirect}>
                    {this.renderRedirect()}
                    <input className="form-navbar" type="text" placeholder="Buscá tu película"
                        onChange={this.handleChange}
                    />

                </form>
            </div>
        )
    }
}


export default Navbar;
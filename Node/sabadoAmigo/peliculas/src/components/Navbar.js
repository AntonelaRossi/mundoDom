import React, {Component } from "react";

class Navbar extends Component {
    constructor (props) {
        super (props);
    } 

    handleChange = e => {
        // console.log(e.target.value);
        this.setState({
           query: e.target.value
        })
        
    }

    handleSubmit = e => {
        e.preventDefault();
        const query = this.state.query
        this.props.handleQuery(query)
    }


    render() {
        return (
            <div className="navbar">
                <img className="logo-navbar" src="http://www.comicgeekos.com/blog/wp-content/uploads/2018/11/Netflix-Logo-small-Transparent.png?w=640"/>
                
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input className="form-navbar" type="text" placeholder="Buscá tu película" 
                    onChange={this.handleChange}
                    />
                </form>


            </div>
        )
    }
}


export default Navbar;
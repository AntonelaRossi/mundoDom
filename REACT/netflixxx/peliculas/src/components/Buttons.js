import React, { Component } from "react";
// import ButtonCategory from "./ButtonCategory";


class Buttons extends Component {
    constructor(props) {
        super(props);

    }

    handleClick = c => {
        this.setState({
            category: this.props.title 
         })
        
        const category = this.props.category
        console.log(category)
        this.props.handleButtons(category)
    }

    render() {
        return (
            <div className="btn-category" onClick={this.handleClick}>

                <h2>{this.props.title}</h2>
                
            </div>
        )
    }
}

export default Buttons;

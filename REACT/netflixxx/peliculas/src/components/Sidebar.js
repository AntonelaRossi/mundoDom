import React, { Component } from "react";
import Buttons from "./Buttons"
import ButtonCategory from "./ButtonCategory"

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    

    

    render() {
        return (
            <div className="sidebar">
                <Buttons category="popular" title="Popular" handleButtons={this.props.handleButtons}  />
                <Buttons category="top_rated" title="Top Rated" handleButtons={this.props.handleButtons} />
                <Buttons category="upcoming" title="Upcoming" handleButtons={this.props.handleButtons} />
                <Buttons category="now_playing" title="Now Playing" handleButtons={this.props.handleButtons} />

            </div>
        );
    }
}

export default Sidebar
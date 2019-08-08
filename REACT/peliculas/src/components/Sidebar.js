import React, { Component } from "react";
import Buttons from "./Buttons"

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="sidebar">
                <Buttons title="Popular" category="popular"/> 
                <Buttons title="Top Rated" category="top_rated"/>
                <Buttons title="Upcoming" category="upcoming"/>
                <Buttons title="Now Playing" category="now_playing"/>
            </div>
        );
    }
}

export default Sidebar
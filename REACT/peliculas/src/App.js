import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import SearchResults from "./components/SearchResults"
import ButtonCategory from './components/ButtonCategory';
import Modal from "./components/Modal"
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="flex-home">
            <Sidebar />
            <Route exact path="/" component={Main}/>
            <Route path="/search/:query" component={SearchResults} />
            <Route path="/movies/:category" component={ButtonCategory} />
            <Route path="/movie/:id" component={Modal}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}
export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import SearchResults from "./components/SearchResults"
import ButtonCategory from './components/ButtonCategory';
import Modal from "./components/Modal"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }


  handleQuery = q => {
    console.log(q)
    this.setState({
      queryResults: q,
      category: ""
    })
  }

  handleButtons = c => {
    this.setState({
      category: c,
      queryResults: ""
    })
  }

  getId = id => {
    this.setState({
      id: id,
    })

  }

  // funcionDelPadre = (params) => {
  //   console.log("IM YOUR FATHER Y LOS PARAMS SON: " + params)
  // }

  render() {
    console.log("APP", this.state)
    return (
      <div className="App">

        <Navbar
          handleQuery={this.handleQuery}
        />

        <div className="flex-home">

          <Sidebar
            //para pasarle via props (es un objeto) algo
           
            handleButtons={this.handleButtons}
          />


          {this.state.category
            ? <ButtonCategory category={this.state.category} getId={this.getId} />
            : this.state.queryResults
              ? <SearchResults queryResults={this.state.queryResults} getId={this.getId} />
              : <Main getId={this.getId} />
          }

          
          {this.state.id
          ? <Modal id={this.state.id} /> 
          :""
          }
          
         

        </div>

      </div>
    );
  }

}
export default App;





//  isQueryOn={isQueryOn === this.state.queryResults ? console.log("no me muestres") : console.log("mostrame")}/></div>
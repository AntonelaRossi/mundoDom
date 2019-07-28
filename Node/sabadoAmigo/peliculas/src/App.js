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
      category:""
    })
  }

  handleButtons = c => {
    this.setState({
      category: c,
      queryResults: ""
    })
  }

  handleModal = i => {
    this.setState({
      idMovie: i,
      // queryResults: "",
      // category: ""
    })

  }

  render() {

    return (
      <div className="App">
        
        <Navbar
          handleQuery={this.handleQuery}
        />

        <div className="flex-home">

          <Sidebar
            handleButtons={this.handleButtons}
          />
     

          {this.state.category 
            ? <ButtonCategory category={this.state.category} /> 
            : this.state.queryResults 
              ? <SearchResults queryResults={this.state.queryResults} /> 
              : <Main />
          }

          {/* <Modal/> */}
         <Modal idMovie={this.state.idMovie}/>
         
        

        </div>

      </div>
    );
  }

}
export default App;





//  isQueryOn={isQueryOn === this.state.queryResults ? console.log("no me muestres") : console.log("mostrame")}/></div>
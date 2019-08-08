import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Profile from "./Profile"

// BrowserRouter entre llaves esta codeada como Destructuring 
// es igual a importar Router y dps
// const BrowserRouter = Router.BrowserRouter

function App() {
  return (
    <BrowserRouter>
      {/* browser solo puede tener un hijo */}
      <div>
        <Link to="/profile/1"> ver usuario 1</Link>
        <Link to="/profile/2"> ver usuario 2</Link>
        <Link to="/profile/3"> ver usuario 3</Link>

        <Route exact path="/" component={Home} />
        {/* path es lo que viene dps del dominio "/about" (cuando esta la barrita sola es la pag principal) */}
        {/* que componente quiero que muestre */}
        <Route path="/about" component={About} />

        <Route path="/profile/:id" component={Profile} />
        {/* el componente es profile y :id es la parte parametrizable */}

      </div>
     

      
    </BrowserRouter>
  );
}

export default App;

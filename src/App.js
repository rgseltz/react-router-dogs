import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import Dog from './Dog';
import './App.css';
import dogArr from './dogArr'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to={"/dogs"}>Home</Link>
      </nav>
        <Switch>
          <Route exact path="/dogs/:name">
            <Dog dogData={dogArr} />
          </Route> 
          <Route  path="/dogs"><DogList dogs={dogArr}/></Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

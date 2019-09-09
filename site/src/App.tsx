import React, { useEffect } from 'react';
import HomePage from './Components/HomePage/HomePage';
import TheGymLog from './Components/TheGymLog/TheGymLog';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  BrowserRouter,
  HashRouter,
  Switch
} from "react-router-dom";
import './app.css';


function App() {

  console.log(window.location.pathname);
  console.log(window.location.pathname.match(/^\/TheGymLog/));
  if (window.location.pathname.match(/^\/TheGymLog/)) {
    console.log('The Gym Log');
    return (
      <TheGymLog />
    )
  } else {
    return (
      <Router>
        <Redirect from="/" to="/home" />
        <Switch>
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

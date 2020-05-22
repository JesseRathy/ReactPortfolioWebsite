import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from  'react-router-dom';
import MainPage from './Components/Pages/MainPage.js';
import AboutPage from './Components/Pages/AboutPage.js';
import PortfolioPage from './Components/Pages/PortfolioPage.js';
import ResumePage from './Components/Pages/ResumePage.js';
import AppDiv from './Components/StyledComponents/AppDiv.js';



class App extends Component {
  render() {
    return (
    <AppDiv>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <MainPage />
          </Route>
          <Route exact path="/about">
          <AboutPage />
          </Route>
          <Route exact path="/portfolio">
          <PortfolioPage />
          </Route>
          <Route exact path="/resume">
          <ResumePage />
          </Route>

        </Switch>
      </div>
    </Router>
  </AppDiv>
    );
  }
}


//-- Normal JS/NON ES6 way to write components
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;

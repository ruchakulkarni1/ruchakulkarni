import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState } from "react";
import Home from "./Tabs/home";
import About from "./Tabs/about";
import Work from "./Tabs/work"
import Project from './Tabs/projects';
import Contact from './Tabs/contact';

function App() {
  return (
    <div>
    <Router>
      <div class="routerDiv">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand inactiveLink" href="/"><h1 className="links">Rucha Kulkarni</h1></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/about"><h4 class="links">About</h4></Link>
              </li>
              <li class="nav-item">
                <Link to="/work"><h4 class="links">Previous Work</h4></Link>
              </li>
              <li class="nav-item">
                <Link to="/projects"><h4 class="links">Projects</h4></Link>
              </li>
              <li class="nav-item">
                <Link to="/contact"><h4 class="links">Contact Me</h4></Link>
              </li>
            </ul>
        </div>
      </nav>
   
  
  <Switch>
  <Route path="/" exact>
          <div>
            <Home></Home>
          </div>
  </Route>
  <Route path="/about">
          <div>
            <About></About>
          </div>
  </Route>
  <Route path="/work">
          <div>
            <Work></Work>
          </div>
  </Route>
  <Route path="/projects">
          <div>
            <Project></Project>
          </div>
  </Route>
  <Route path="/contact">
          <div>
            <Contact></Contact>
          </div>
  </Route>
  </Switch>
  </div>
  </Router>
  <footer class="footerClass">
  <div class="other">
                <p class="otherTitle">© 2022 Rucha Kulkarni</p>  
                <div class="social">
                <a href="https://www.linkedin.com/in/rucha-kulkarni-0204ab84/"><img src="./linkedin.png" alt="linkedIn link" class="connectImage"></img></a>
                <a href="https://github.com/ruchakulkarni1"><img src="./github.png" alt="github link" class="connectImage"></img></a>
                </div>
             </div>
    </footer>
  </div>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Picks from './components/Picks';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/picks">
            <Picks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Bookmarks from './components/Bookmarks';
import ReactGA from 'react-ga4';
import './styles/styles.css';

const TRACKING_ID = "G-1STS1V6GRM";
ReactGA.initialize(TRACKING_ID);

function usePageTracking() {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
}

function App() {
  usePageTracking();
  
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
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

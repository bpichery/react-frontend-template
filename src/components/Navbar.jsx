import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function Navbar() {
  return (
    <div>
      <Router>
        <h2> Promenons nous</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">Découvertes</Link>
            </li>
          </ul>

          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            placeholder="Recherchez ici"
          />

          <button type="button">Cliquez ici</button>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;

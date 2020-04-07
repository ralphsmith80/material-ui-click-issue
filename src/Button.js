import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Home() {
  return <h2 data-cy="home">Home</h2>;
}

function About() {
  return <h2 data-cy="about">About</h2>;
}

function Users() {
  return <h2 data-cy="users">Users</h2>;
}

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Button color="primary" component={Link} data-cy="home-link" to="/">
              Home
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              component={Link}
              data-cy="about-link"
              to="/about"
            >
              About
            </Button>
          </li>
          <li>
            <Button
              color="primary"
              component={Link}
              data-cy="users-link"
              to="/users"
            >
              Users
            </Button>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import glamorous from 'glamorous';

import Welcome from '../components/Welcome';
import Businesses from '../components/Businesses';
import Signin from '../components/Signin';
import Authentication from '../components/Authentication';

const App = glamorous.div({
  minHeight: '100vh',
  background: '#ff9966',
  background: 'linear-gradient(to top, #ff5e62, #ff9966)',
  '@media only screen and (max-width: 768px)': {
    padding: '0 10px'
  }
});

const Container = glamorous.div({
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const isAuthenticated = false;

const routes = (
  <Router>
    <App>
      <Route path='/' exact render={(props) => (
        <Container>
          <Authentication isAuthenticated={isAuthenticated} />
          <Welcome />
          <Businesses />
        </Container>
      )} />
      <Route path='/signin' render={Signin} />
    </App>
  </Router>
);

export default routes;

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';
import Signout from './auth/signout';
import SignUp from './auth/signup';
import Feature from './feature';
import RequireAuth from './auth/requireAuth';
import Welcome from './welcome';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/feature" component={RequireAuth(Feature)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

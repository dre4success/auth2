import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/signin" component={Signin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

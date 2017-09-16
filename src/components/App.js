import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

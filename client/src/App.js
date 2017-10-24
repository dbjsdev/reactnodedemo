import React, { Component } from 'react';
import './App.css';
import { Router, browserHistory } from 'react-router';
import Home from './components/layouts/Home';
/*
      <Router history={browserHistory}>
        <Route path="/" component={Something} />
      </Router>
*/      
class App extends Component {
  render() {
    return (
    	<Home />
    );
  }
}

export default App;

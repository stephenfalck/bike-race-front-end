import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import Riders from './riders';
import Photos from './photos';
import Submissions from './submissions';
import Location from './location';
import './App.css';
import Navbar from './navbar';

class App extends Component {
  componentDidMount() {
    window.fetch('/riders')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route path="/" exact component={Home} />
          <Route path="/riders" component={Riders} />
          <Route path="/location" component={Location} />
          <Route path="/photos" component={Photos} />
          <Route path="/submissions" component={Submissions} />
        </div>
      </Router>
    );
  }
}

export default App;

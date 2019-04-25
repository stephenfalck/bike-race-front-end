import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './home';
import Riders from './riders';
import Gallery from './gallery';
import Submissions from './submissions';
import Location from './location';
import './App.css';
import Navbar from './navbar';

class App extends Component {
  
  /*componentDidMount() {
    window.fetch('/riders')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }*/

  render() {
    return (
      <Router>
        <div className="page">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/riders" component={Riders} />
          <Route path="/location" component={Location} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/submissions" component={Submissions} />
          
        </div>
      </Router>
    );
  }
}

export default App;

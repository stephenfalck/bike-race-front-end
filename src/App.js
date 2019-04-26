import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './home/home';
import Riders from './riders/riders';
import Gallery from './gallery/gallery'; 
import Location from './location_components/location';
import './App.css';
import asyncComponent from './hoc/async_component'
import Navbar from './navbar/navbar';

const AsyncSubmissionsPage = asyncComponent(() => {
  return import('./submissions/submissions')
});

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
          <Route path="/submissions" component={AsyncSubmissionsPage} />
        </div>
      </Router>
    );
  }
}

export default App;

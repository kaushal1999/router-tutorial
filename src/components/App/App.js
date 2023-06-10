import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Manatee from '../Manatee/manatee';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>Marine Mammals</h1>
        <Manatee></Manatee>
      </div>
    );
  }
}

export default App;

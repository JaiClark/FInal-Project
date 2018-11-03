import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ThankYou from './pages/ThankYou';
import Auth from './pages/Auth';

import './App.css';



const App =() =>  (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Auth} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Shop' component={Shop} />
        <Route exact path='/ThankYou' component={ThankYou} />
      </div>
    </Router>
)

export default App;

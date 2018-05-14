import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Whatwedo from './Components/Whatwedo';
import Drivers from './Components/Drivers';
import Employers from './Components/Employers';

ReactDOM.render(
  <div>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Whatwedo" component={Whatwedo} />
        <Route path="/Drivers" component={Drivers} />
        <Route path="/Employers" component={Employers} />
      </Switch>
    </Router>
  </div>, document.getElementById('root'));
registerServiceWorker();

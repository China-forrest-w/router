import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';
import { Route, HashRouter } from './react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={Home} />
    <Route path="/user" component={User} />
    <Route path="/profile" component={Profile} />
  </HashRouter>,
  document.getElementById('root')
);
/* 
路由容器：Router
路由规则：Route
*/
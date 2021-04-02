import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, BrowserRouter } from './react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/user" component={User} />
    <Route path="/profile" component={Profile} />
  </BrowserRouter>,
  document.getElementById('root')
);
/* 
路由容器：Router
路由规则：Route
*/
/*
 * @Author: your name
 * @Date: 2021-03-28 14:52:48
 * @LastEditTime: 2021-04-02 23:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, BrowserRouter, Switch } from './react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
/*
路由容器：Router
路由规则：Route
*/
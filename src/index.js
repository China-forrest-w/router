/*
 * @Author: your name
 * @Date: 2021-03-28 14:52:48
 * @LastEditTime: 2021-04-03 16:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, BrowserRouter, Switch, Redirect, Link } from './react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';

ReactDOM.render(
  <BrowserRouter>
    <ul>
    <li><Link to="/">首页</Link></li>
    <li><Link to="/user">用户管理</Link></li>
    <li><Link to="/profile">个人中心</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
/*
路由容器：Router
路由规则：Route
*/
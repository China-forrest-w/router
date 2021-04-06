/*
 * @Author: your name
 * @Date: 2021-03-28 14:52:48
 * @LastEditTime: 2021-04-06 11:51:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, BrowserRouter, Switch, Redirect, Link, NavLink } from './react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';
import Login from './components/Login';
import Protected from './components/Protected';
import NavBar from './components/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <NavBar title="点击返回首页"/>
    <ul>
      <li><NavLink to="/" >首页</NavLink></li>
      <li><NavLink to="/user">用户管理</NavLink></li>
      <li><NavLink to="/profile">个人中心</NavLink></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/login" component={Login} />
      <Protected path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
/*
路由容器：Router
路由规则：Route
*/
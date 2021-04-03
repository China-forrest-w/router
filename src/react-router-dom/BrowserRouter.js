/*
 * @Author: your name
 * @Date: 2021-03-28 16:40:35
 * @LastEditTime: 2021-04-03 16:59:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router-dom/BrowserRouter.js
 */
import React from 'react';
import { Router } from '../react-router';
import { createBrowserHistory } from '../history';

class BrowserRouter extends React.Component {
  history = createBrowserHistory();
  render() {
    return (
      <Router history={this.history}>
        {this.props.children}
      </Router>
    )
  }
}

export default BrowserRouter;
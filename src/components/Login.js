/*
 * @Author: your name
 * @Date: 2021-04-04 16:29:38
 * @LastEditTime: 2021-04-04 16:31:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/Login.js
 */

import React from 'react';
class Login extends React.Component {
  login = (event) => {
    localStorage.setItem('login', 'true');
    let to;
    if (this.props.location.state) {
      to = this.props.location.state.from || '/';
    }
    this.props.history.push(to);
  }
  render() {
    return (
      <button onClick={this.login}>登录</button>
    )
  }
}
export default Login;
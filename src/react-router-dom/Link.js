/*
 * @Author: your name
 * @Date: 2021-04-03 16:18:58
 * @LastEditTime: 2021-04-03 16:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router-dom/Link.js
 */
import React, { Component } from 'react';
import RouterContext from '../react-router/RouterContext';

function Link(props) {
  return (
    <RouterContext.Consumer>
      {
        ({ history }) => (<a {...props} onClick={(event) => {
          event.preventDefault();//阻止默认事件
          history.push(props.to);
        }}>{props.children}</a>)
      }
    </RouterContext.Consumer>
  )
}

export default Link;
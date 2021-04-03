/*
 * @Author: your name
 * @Date: 2021-04-03 15:58:20
 * @LastEditTime: 2021-04-03 16:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/Redirect.js
 */
import React from 'react';
import RouterContext from './RouterContext';
import Lifecycle from './Lifecycle';

function Redirect({ to }) {
  return (
    <RouterContext.Consumer>
      {
        value => (
          <Lifecycle onMount={() => value.history.push(to)} />
        )
      }
    </RouterContext.Consumer>
  )
}
export default Redirect;
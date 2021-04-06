/*
 * @Author: your name
 * @Date: 2021-04-06 11:50:27
 * @LastEditTime: 2021-04-06 12:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/NavBar.js
 */
import React from 'react';
import { withRouter } from '../react-router';

function NavBar(props) {
  return (
    <div onClick={() => props.history.push('/')}>
      {props.title}
    </div>
  )
}
export default withRouter(NavBar);
/*
 * @Author: your name
 * @Date: 2021-04-02 17:07:48
 * @LastEditTime: 2021-04-03 16:06:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router-dom/Switch.js
 */
import React, { Component } from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

class Switch extends Component {
  static contextType = RouterContext;
  render() {
    const { location } = this.context;
    let element, match;
    /* this.props.children可以是undefined、对象、数组、字符串、数组 */
    React.Children.forEach(this.props.children, child => {
      if (!match && React.isValidElement(child)) {//没有任何一个元素匹配上
        /* React.isValidElement:判断是否不是React元素 */
        element = child;
        match = matchPath(location.pathname, child.props);
      }//有一个匹配上那后面的都不进行匹配
    });
    return match ? React.cloneElement(element, { computedMatch: match }) : null;
  }
}
export default Switch;
/*
 * @Author: your name
 * @Date: 2021-03-28 18:03:17
 * @LastEditTime: 2021-04-05 02:02:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/Route.js
 */
import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
/* 
1.获取到context中的值
2.匹配路由规则里的paths是否和当前url的地址相等
*/
class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    const { history, location } = this.context;
    const { component: RouteComponent, computedMatch, render, children } = this.props;
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props);
    let renderElement = null;
    let routeProps = { history, location };
    if (match) {
      //如果一个组件是由Route或者路由组件渲染出来的， 那么RouteProps就是路由属性
      routeProps.match = match;
      if (RouteComponent) {
        renderElement = <RouteComponent {...routeProps} />
      } else if (render) {
        renderElement = render(routeProps);
      } else if (children) {
        renderElement = children(routeProps);
      }
    }
    return renderElement;
  }
}

export default Route;
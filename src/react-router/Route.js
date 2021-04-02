/*
 * @Author: your name
 * @Date: 2021-03-28 18:03:17
 * @LastEditTime: 2021-04-02 19:04:29
 * @LastEditors: your name
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
    const { component: RouteComponent, computedMatch } = this.props;
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props);
    let renderElement = null;
    let routeProps = { history, location };
    if (match) {
      routeProps.match = match;
      renderElement = <RouteComponent {...routeProps} />
    }
    return renderElement;
  }
}

export default Route;
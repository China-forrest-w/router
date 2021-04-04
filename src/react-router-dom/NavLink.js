/*
 * @Author: your name
 * @Date: 2021-04-05 02:24:24
 * @LastEditTime: 2021-04-05 04:09:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router-dom/NavLink.js
 */
import React, { useContext } from 'react';
import { Link } from '../react-router-dom';
import { _RouterContext as RouterContext } from "../react-router";
import { matchPath, Route } from '../react-router';

/* 自己实现的版本 */
function NavLinkSelf(props) {
  const {
    to,
    className: classNameProps = "",//原生类型
    style: styleProps = {},
    activeClassName = "",
    activeStyle = {},
    children,
    exact
  } = props;
  return (
    <Route path={to} exact={exact} children={
      (routeProps) => {
        let match = routeProps.match;
        let className = match ? joinClassNames(classNameProps, activeClassName) : classNameProps;
        let style = match ? { ...styleProps, activeStyle } : styleProps;
        let linkProps = {
          className,
          style,
          to,
          children
        }
        return <Link {...linkProps} />
      }
    } />
  )
}

/* react官方源码实现 */
function NavLink(props) {
  let context = useContext(RouterContext);
  let { pathname } = context.location;
  const {
    to,
    className: classNameProps = "",//原生类名
    style: styleProps = {},//原始的行内样式对象
    activeClassName = '',
    activeStyle = {},
    children,
    exact
  } = props;
  /* 匹配当前的路径和自己的to路径是否匹配 */
  let isActive = matchPath(pathname, { path: to, exact });
  let className = isActive ? joinClassNames(classNameProps, activeClassName) : classNameProps;
  let style = isActive ? { ...styleProps, ...activeStyle } : styleProps;
  let linkProps = {
    className,
    style,
    to,
    children,
  }
  return <Link {...linkProps} />
}

function joinClassNames(...className) {
  /* 把空的类名过滤掉 */
  return className.filter(c => c).join('');
}
export default NavLink;
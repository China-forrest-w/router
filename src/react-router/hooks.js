/*
 * @Author: your name
 * @Date: 2021-04-06 15:06:01
 * @LastEditTime: 2021-04-06 16:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/hooks.js
 */
import React, { useContext } from 'react';
import { matchPath } from 'react-router-dom';
import RouterContext from './RouterContext';
// import matchPath from './matchPath';

export function useHistory() {
  return useContext(RouterContext).history;
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export function useParams() {
  let match = useContext(RouterContext).match;
  return match ? match.params : {};
}

export function useRouteMatch(path) {
  let location = useLocation();
  let match = useContext(RouterContext).match;
  return path ? matchPath(location.pathname, path) : match;
}
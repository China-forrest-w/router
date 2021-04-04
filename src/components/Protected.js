/*
 * @Author: your name
 * @Date: 2021-04-04 15:48:56
 * @LastEditTime: 2021-04-04 15:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/Protected.js
 */
import { Redirect } from 'react-router-dom';
import { Route, Link } from '../react-router-dom';

const Protected = (props) => {
  /* path:要匹配的路径； RouteComponent: 本来要渲染的组件 */
  let { path, component: RouteComponent } = props;
  return (
    <Route
      path={path}
      render={
        (routeProps) => (
          localStorage.getItem('login') ? <RouteComponent {...routeProps} />
            :
            <Redirect to={{ pathname: '/login', state: { from: path } }} />
        )
      }
    />
  )
}
export default Protected;
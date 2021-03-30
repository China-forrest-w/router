import React from 'react';
import RouterContext from './RouterContext';

/* 
获取到context中的值
*/
class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    const { history, location } = this.context;
    const { path, component: RouteComponent } = this.props;
    const match = location.pathname === path;
    let renderElement = null;
    let routeProps = { history, location, match };
    if (match) {
      renderElement = <RouteComponent {...routeProps} />
    }
    return renderElement;
  }
}

export default Route;
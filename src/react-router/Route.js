import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
/* 
获取到context中的值
*/
class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    const { history, location } = this.context;
    const { component: RouteComponent } = this.props;
    const match = matchPath(location.pathname, this.props);
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
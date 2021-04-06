/*
 * @Author: your name
 * @Date: 2021-04-06 11:53:22
 * @LastEditTime: 2021-04-06 12:19:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/WithRouter.js
 */
import React from 'react';
import RouterContext from './RouterContext';

function withRouter(OldComponent) {
  return props => {
    return (
      <RouterContext.Consumer>
        {
          value => {
            return <OldComponent {...props} {...value} />
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default withRouter;
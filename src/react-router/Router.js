/*
 * @Author: your name
 * @Date: 2021-03-28 16:39:46
 * @LastEditTime: 2021-04-02 16:43:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/Router.js
 */
import React from 'react';
import RouterContext from './RouterContext';
class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location
    }
    /* 监听历时对象中的路径变化，当路径变化后执行回调函数,参数就是最新的路径信息 */
    /* 返回一个取消监听的函数，调用它可以取消监听 */
    this.unlisten = props.history.listen(location => {
      this.setState({ location })
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const value = {
      location: this.state.location,//用来传递给Route用来判断路由是否匹配
      history: this.props.history,//用来让组件跳转路径
      match: Router.computeRootMatch(this.state.location.pathname),
    }
    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
export default Router;
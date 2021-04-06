/*
 * @Author: your name
 * @Date: 2021-03-29 18:13:46
 * @LastEditTime: 2021-04-06 13:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/history/createBrowserHistory.js
 */
function createBrowserHistory() {
  const globalHistory = window.history;
  const listeners = [];
  let action;
  let state;
  let message;
  function go(n) {
    globalHistory.go(n);
  }
  function goBack(n) {
    go(-1);
  }
  function goForward(n) {
    go(1);
  }
  function listen(listener) {
    listeners.push(listener);
    return () => {
      let idx = listeners.indexOf(listener);
      listeners.splice(idx, 1);
    }
  }
  function setState(newState) {
    Object.assign(history, newState);
    listeners.forEach(listener => listener(history.location));
  };
  function push(pathname, nextState) {
    action = 'PUSH';
    if (typeof pathname === 'object') {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }
    if (message) {
      let showMessage = message({ pathname });
      let allow = window.confirm(showMessage);
      if (!allow) return;
    }
    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    setState({ action, location })
  }

  /* 当回退或前进的时候回执行该回调函数 浏览器自带，默认支持*/
  window.onpopstate = (event) => {
    console.log('onPopState');
    setState({ aciton: 'POP', location: { pathname: window.location.pathname, state: globalHistory.state } });
  }
  function block(newMessage) {
    message = newMessage;
    return () => message = null;
  }
  const history = {
    action: 'POP',
    location: { pathname: window.location.pathname, state: globalHistory.state },
    go,
    goForward,
    goBack,
    push,
    listen,
    block,
  }
  return history
}
export default createBrowserHistory;
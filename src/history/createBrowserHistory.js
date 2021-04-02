function createBrowserHistory() {
  const globalHistory = window.history;
  const listeners = [];
  let action;
  let state;
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
    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    setState({ action, location })
  }

  /* 当回退或前进的时候回执行该回调函数 浏览器自带，默认支持*/
  window.onpopstate = (event) => {
    console.log('onPopState');
    setState({ aciton: 'POP', location: { pathname: window.location.pathname, state: globalHistory.state } });
  }
  const history = {
    action: 'POP',
    location: { pathname: window.location.pathname, state: globalHistory.state },
    go,
    goForward,
    goBack,
    push,
    listen,
  }
  return history
}
export default createBrowserHistory;
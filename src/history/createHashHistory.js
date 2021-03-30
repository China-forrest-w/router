function createHashHistory() {
  let action;
  const listeners = [];
  function listen(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1)
      // listeners = listeners.filter(item => item !== listener)
    }
  }

  window.addEventListener('hashchange', () => {
    let pathname = window.location.hash.slice(1);
    /* 把新的action和pathname赋值给history.action/history.location */
    Object.assign(history, { action, location: { pathname } })
    listeners.forEach(listener => listener(history.location));
  })

  function push(pathname) {
    action = 'PUSH';
    // 给hash赋值时不加#，取hash值时有#
    window.location.hash = pathname;
  }

  function go() {

  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  /* 自己实现的History 区分与 window.history(具有兼容问题)，但是我们自己写的hashHistory没有兼容问题 */
  const history = {
    action: 'POP',//当前最后一个动作是什么动作 push goBack pop
    location: { pathname: window.location.hash.slice(1) || '/', state: undefined },
    go,
    goBack,
    goForward,
    push,
    listen
  }
  return history;
}

export default createHashHistory;
/*
 * @Author: your name
 * @Date: 2021-03-29 18:13:39
 * @LastEditTime: 2021-03-31 22:02:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/history/createHashHistory.js
 */
/* 
重点： state的维护(页面刷新的时候状态不会丢失)、历时栈的维护
*/
function createHashHistory() {
  let action;
  const listeners = [];
  const historyStack = [];//历史栈
  let historyIndex = -1;//栈指针
  let state;
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
    Object.assign(history, { action, location: { pathname, state } })
    if (!action || action === 'PUSH') {
      //不要用push的形式，应该用指针，因为回退要覆盖上一步 page1 page2 page3 page4
      // historyStack.push(history.location);
      historyStack[++historyIndex] = history.location;
    }
    listeners.forEach(listener => listener(history.location));
  })

  function push(pathname, nextState) {
    action = 'PUSH';
    if (typeof pathname === 'object') {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }
    // 给hash赋值时不加#，取hash值时有#
    window.location.hash = pathname;
  }
  /* go通过历史栈实现 */
  function go(n) {
    action = 'POP';
    historyIndex += n;
    const nextLocation = historyStack[historyIndex];
    state = nextLocation.state;
    window.location.hash = nextLocation.pathname;
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
    location: { pathname: '/', state: undefined },
    go,
    goBack,
    goForward,
    push,
    listen
  }
  action = 'PUSH';
  window.location.hash = window.location.hash ? window.location.hash.slice(1) : '/';
  return history;
}

export default createHashHistory;
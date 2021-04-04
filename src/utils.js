import User from "./components/User";

/*
 * @Author: your name
 * @Date: 2021-04-04 14:32:30
 * @LastEditTime: 2021-04-04 14:35:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/utils.js
 */
export const UserAPI = {
  list() {
    let usersString = localStorage.getItem('users');
    let users = usersString ? JSON.parse(usersString) : [];
    return users;
  },
  add(user) {
    let users = UserAPI.list();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  },
  find(id) {
    let users = UserAPI.list();
    return users.find(user => user.id === id);
  }
}
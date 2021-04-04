/*
 * @Author: your name
 * @Date: 2021-04-04 14:45:52
 * @LastEditTime: 2021-04-05 04:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/UserList.js
 */
import React from 'react';
import { Link } from '../react-router-dom';
import { UserAPI } from '../utils';
class UserList extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    let users = UserAPI.list();
    this.setState({ users });
  }
  render() {
    return (
      <ul>
        {
          this.state.users.map(user => (
            <li key={user.id}><Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>{user.name}</Link></li>
          ))
        }
      </ul>
    )
  }
}
export default UserList;
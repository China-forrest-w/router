/*
 * @Author: your name
 * @Date: 2021-04-04 14:54:52
 * @LastEditTime: 2021-04-04 15:00:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/UserAdd.js
 */
import React from 'react';
import { UserAPI } from '../utils';

class UserList extends React.Component {
  nameRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.nameRef.current.value;
    UserAPI.add({ id: Date.now() + '', name });
    this.props.history.push('/user/list');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.nameRef} />
        <button type="submit">提交</button>
      </form>
    )
  }
}
export default UserList;
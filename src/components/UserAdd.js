/*
 * @Author: your name
 * @Date: 2021-04-04 14:54:52
 * @LastEditTime: 2021-04-06 14:19:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/UserAdd.js
 */
import React from 'react';
import { UserAPI } from '../utils';
import { Prompt } from '../react-router-dom';

class UserList extends React.Component {
  state = {
    isBlocking: false//阻止跳转
  }
  nameRef = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();//不要让表单刷新
    this.setState({ isBlocking: false }, () => {
      let name = this.nameRef.current.value;
      UserAPI.add({ id: Date.now() + '', name });
      this.props.history.push('/user/list');
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt when={this.state.isBlocking} message={location => `请问你是否真的要跳到${location.pathname}去吗？`} />
        <input ref={this.nameRef} onChange={(event) => this.setState({ isBlocking: event.target.value.length > 0 })} />
        <button type="submit">提交</button>
      </form>
    )
  }
}
export default UserList;
/*
 * @Author: your name
 * @Date: 2021-04-03 16:01:24
 * @LastEditTime: 2021-04-03 16:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/Lifecycle.js
 */
import React, { Component } from 'react';
class Lifecycle extends Component {
    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }
    componentWillUnmount() {
        this.props.onUnmount && this.props.onUnmount();
    }
    render() {
        return null;
    }
}
export default Lifecycle;
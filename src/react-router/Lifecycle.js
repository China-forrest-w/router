/*
 * @Author: your name
 * @Date: 2021-04-03 16:01:24
 * @LastEditTime: 2021-04-06 13:42:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/Lifecycle.js
 */
import React, { Component } from 'react';
class Lifecycle extends Component {
    componentDidMount() {
        this.props.onMount && this.props.onMount(this);
    }
    componentWillUnmount() {
        this.props.onUnmount && this.props.onUnmount(this);
    }
    render() {
        return null;
    }
}
export default Lifecycle;
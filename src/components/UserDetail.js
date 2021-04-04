/*
 * @Author: your name
 * @Date: 2021-04-04 15:05:21
 * @LastEditTime: 2021-04-04 15:28:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/UserDetail.js
 */
import React from 'react';
import { UserAPI } from '../utils';

class UserDetail extends React.Component {
    state = {
        user: {}
    }
    componentDidMount() {
        let user = this.props.location.state;
        if (!user) {
            let id = this.props.match.params.id;
            user = UserAPI.find(id);
        }
        if (user) {
            this.setState({ user })
        }
    }
    render() {
        let { user } = this.state;
        return (
            <div>
                ID: {user.id};name: {user.name}
            </div>
        )
    }
}
export default UserDetail;
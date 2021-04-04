/*
 * @Author: your name
 * @Date: 2021-03-28 16:39:28
 * @LastEditTime: 2021-04-04 15:33:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/User.js
 */
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
import { Link, Route } from '../react-router-dom';
const User = (props) => {
    console.log('props', props);
    return (
        <div>
            <ul>
                <li><Link to="/user/list">用户列表</Link></li>
                <li><Link to="/user/add">添加用户</Link></li>
            </ul>
            <Route path="/user/list" component={UserList} />
            <Route path="/user/add" component={UserAdd} />
            <Route path="/user/detail/:id" component={UserDetail} />
        </div>
    )
}
export default User;
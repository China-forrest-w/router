/*
 * @Author: your name
 * @Date: 2021-03-28 16:39:28
 * @LastEditTime: 2021-03-31 11:18:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/User.js
 */
const User = (props) => {
    return (
        <div>
            User
            <button onClick={() => props.history.goBack()}>返回</button>
        </div>
    )
}
export default User;
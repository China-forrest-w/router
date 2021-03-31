/*
 * @Author: your name
 * @Date: 2021-03-28 16:39:17
 * @LastEditTime: 2021-03-31 21:44:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/components/Home.js
 */
const Home = (props) => {
    return (
        <div>
            home
            <button onClick={() => props.history.push('/user', {name: 'j'})}>
                调到/User
            </button>
            <button onClick={() => props.history.push({ pathname: '/user', state: { name: '用户管理' } })}>跳到user</button>
        </div>
    )
}
export default Home;
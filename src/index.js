/*
 * @Author: your name
 * @Date: 2021-04-06 14:41:34
 * @LastEditTime: 2021-04-06 15:45:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, useParams, useLocation, useHistory, useRouteMatch, Switch } from './react-router-dom';

const Home = () => <div>首页</div>

function UserDetail() {
  let params = useParams();//路径参数
  let location = useLocation();//路径对象
  let history = useHistory();//历史对象
  console.log('params', params);
  console.log('location', location);
  console.log('history', history);
  return (
    <div>id:{params.id}; name: {location.state.name}</div>
  )
}

function Post() {
  let match = useRouteMatch({
    path: '/post/:id',//匹配的路径
    strict: true,//是否允许出现最后的可选项
    sensitive: true//大小写是否敏感
  })
  return match ? <div>id: {match.params.id}</div> : <div>Not Found</div>
}


ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to={{ pathname: `/user/detail/1`, state: { id: 1, name: 'tom' } }}>用户详情</Link></li>
      <li><Link to="/post/1">帖子</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/detail/:id" component={UserDetail} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
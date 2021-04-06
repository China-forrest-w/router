/*
 * @Author: your name
 * @Date: 2021-04-02 15:13:23
 * @LastEditTime: 2021-04-06 16:51:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/matchPath.js
 */


import pathToRegexp from 'path-to-regexp';

const cache = {};

function compilePath(path, options = {}) {
    let cacheKey = path + JSON.stringify(options);
    if (cache[cacheKey]) return cache[cacheKey];

    const keys = [];//处理路径参数
    const regexp = pathToRegexp(path, keys, options);
    let result = { keys, regexp };
    cache[cacheKey] = result;
    return { keys, regexp };
}
/* 
pathname: 浏览器当前真实的路径名
options: Route组件的props  path Component exact
path Route的路径
exact 是否精确匹配
strict 是否严格匹配
sensitive 是否大小写敏感
*/
/* 根据路径匹配到match */
function matchPath(pathname, options = {}) {
    let { path = '/', exact = false, strict = false, sentive = false } = options;
    let { keys, regexp } = compilePath(path, { end: exact, strict, sentive });
    const match = regexp.exec(pathname);
    if (!match) return null;
    const [url, ...values] = match;
    const isExact = pathname === url;
    /* 要求精确但是并不精确 */
    if (exact && !isExact) return null;
    return {
        path,//来自Route里的path路径
        url,//来自浏览器地址中的url
        isExact,//是否精确匹配
        params: keys.reduce((memo, key, index) => {
            memo[key.name] = values[index];
            return memo;
        }, {})
    }
}

export default matchPath;
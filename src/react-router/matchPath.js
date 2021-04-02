
/* 
pathname: 浏览器当前真实的路径名
options: Route组件的props  path Component exact
*/
import pathToRegexp from 'path-to-regexp';
function compilePath(path, options = {}) {
    const keys = [];//处理路径参数
    const regexp = pathToRegexp(path, keys, options);
    return { keys, regexp };
}

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
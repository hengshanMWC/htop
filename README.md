# 使用
```
npm i htop
yarn add htop
```
```js
import { wxPromiseAll } from 'htop'
const wxq = wxPromiseAll()
wxq.showToast({title: '成功'})
  .then(() => console.log('success'))
  .catch(() => console.log('fail'))
  .finally(() => console.log('finally'))
```
# 建议
不同端的可以放在adapter目录，然后导出到index.js上
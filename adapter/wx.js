import { make } from '../make'
function wxPromise(key) {
  return function (param) {
    return new Promise((resolve, reject) => {
      const data = Object.assign({
        success(res) {
          resolve(res)
        },
        fail(res){
          reject(res)
        }
      }, param)
      wx[key](data);
    })
  }
}

export default function wxPromiseAll () {
  return make(wx, wxPromise)
}
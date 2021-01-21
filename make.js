export function make (obj, fn) {
  if (typeof Proxy === 'function') {
    return createProxyAll(obj, fn)
  } else {
    return createdefinePropertyAll(obj, fn)
  }
}
export function createProxyAll (obj, fn) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (!target[key]) target[key] = fn(key)
      return Reflect.get(target, key, receiver);
    }
  })
}
export function createdefinePropertyAll (obj, fn) {
  const _obj = {}
  const result = {}
  Object.keys(obj).forEach(key => {
    Object.defineProperty(result, key, {
      get() {
        if (!_obj[key]) _obj[key] = fn(key)
        return _obj[key]
      },
    })
  })
  return result
}


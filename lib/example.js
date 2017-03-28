'use strict'
const example = 'test'

console.log(example)

module.exports = {
  sync: (value) => value,
  async: (value, cb) => setTimeout(() => cb(null, value), 0),
  promise: (value) => Promise.resolve(value)
}

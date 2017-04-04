'use strict'

const a = 1
const b = 2
const c = 3

const firstFunction = function () {
  const b = 5
  const c = 6
    const secondFunction = function () {
      const b = 8
      console.log('a: ' + a + ', b: ' + b + ', c: ' + c)
        const thirdFunction = function () {
          const a = 7
          const c = 9
            const fourthFunction = function () {
              const a = 1
              const c = 8
            }
        }
    }
}

'use strict'

var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;
        // console.log('a: ' + a + ', b: ' + b + ', c: ' + c)
        console.log("a: "+a+", b: "+b+", c: "+c);

        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();

/*
const a = 1
const b = 2
const c = 3

(function firstFunction () {
  const b = 5
  const c = 6
  (function secondFunction () {
    let b = 8
    console.log('a: ' + a + ', b: ' + b + ', c: ' + c)
      (function thirdFunction () {
         let a = 7
         let c = 9
          (function fourthFunction () {
            let a = 1
            let c = 8
          })()
      })()
  })()
})()
*/

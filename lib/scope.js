const a = 1;

(function firstFunction() {
  const c = 6;
  (function secondFunction() {
    const b = 8
    console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
    (function thirdFunction() {
      (function fourthFunction() {})()
    })()
  })()
})()

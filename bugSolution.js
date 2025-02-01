function foo(a, b) {
  a = (a === null || a === undefined) ? 0 : a;
  b = (b === null || b === undefined) ? 0 : b; 
  return a + b;
}

console.log(foo(undefined, 1)); //1
console.log(foo(null, 1)); //1
console.log(foo(null, undefined)); //0
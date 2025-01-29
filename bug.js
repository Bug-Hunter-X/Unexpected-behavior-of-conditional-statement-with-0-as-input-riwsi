function foo(x) {
  if (x === null) {
    return 0;
  } else if (x > 0) {
    return x * 2;
  } else {
    return x / 2;
  }
}

console.log(foo(null)); // 0
console.log(foo(10));  // 20
console.log(foo(-4));  // -2
console.log(foo(0));   // unexpected: 0, should throw an error or return NaN
function foo(x) {
  if (x === null) {
    return 0;
  } else if (x > 0) {
    return x * 2;
  } else if (x < 0) {
    return x / 2;
  } else {
    return NaN; // Handle the case where x is 0
  }
}

console.log(foo(null)); // 0
console.log(foo(10));  // 20
console.log(foo(-4));  // -2
console.log(foo(0));   // NaN
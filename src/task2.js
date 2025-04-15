const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

const curry = (f) => {
  const curried = (...args) => (
    f.length > args.length 
      ? curry(f.bind(null, ...args))
      : f(...args)
  );

  return curried;
};

const result1 = curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5); // true
const result2 = curry(multiply)(1)(2)(3) == multiply(1, 2, 3); // true

console.log('curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5) =', result1);
console.log('curry(multiply)(1)(2)(3) == multiply(1, 2, 3) =', result2);

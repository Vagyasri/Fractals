import './style.css';

// eslint-disable-next-line max-len
// Question: calculate the perimeter of the resulting snowflake in each iteration for the given length of square

// Example: triangle Length=9 Iterations=1
// Output: 36

// 1. tri Length=243 Iterations=3 // 1728

// 2. tri Length=19683 Iterations=7 // 442368

// 3. tri Length=531441 Iterations=7 // 11943936

// 4. tri Length=531441 Iterations=9 // 21233664

const sqPerimeter = (length) => length * 4;

const periAftIterations = (iterations, length) => {
  let perimeter = 0;
  for (let i = 1; i <= iterations; i += 1) {
    perimeter = Math.round(sqPerimeter(length) * ((5 / 3) ** i));
  }
  return perimeter;
};

console.log(periAftIterations(1, 9));
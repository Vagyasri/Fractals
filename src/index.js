import './style.css';

// eslint-disable-next-line max-len
// Question: calculate the perimeter of the resulting snowflake in each iteration for the given length of square

// Example: square Length=9 Iterations=1
// Output: 60

// 1. sq Length=243 Iterations=3 // 4500

// 2. sq Length=19683 Iterations=7 // 2812500

// 3. sq Length=531441 Iterations=7 // 75937500

// 4. sq Length=531441 Iterations=9 // 210937500

const sqPerimeter = (length) => length * 4;

const periAftIterations = (iterations, length) => {
  let perimeter = 0;
  for (let i = 1; i <= iterations; i += 1) {
    perimeter = Math.round(sqPerimeter(length) * ((5 / 3) ** i));
  }
  return perimeter;
};

const len = [243, 19683, 531441, 531441];
const itr = [3, 7, 7, 9];

for (let i = 0; i < len.length; i += 1) {
  console.log(periAftIterations(itr[i], len[i]));
}

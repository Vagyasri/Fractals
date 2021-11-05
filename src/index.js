import './style.css';

// calculate perimeter of resulting snowflake in each iteration for a equilateral triangle
const triPerimeter = (length) => length * 3;

const periAftIterations = (iterations, length) => {
  let perimeter = 0;
  for (let i = 0; i < iterations; i += 1) {
    perimeter += (triPerimeter(length) * (4 / 3));
    length /= 3;
  }
  return perimeter;
};

console.log(periAftIterations(1, 3));
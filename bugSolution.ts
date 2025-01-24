function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: Adds two numbers
const result2 = add(1, Number('2')); // Correct: Converts string to number
//const result3 = add(1, '2'); // Type Error: This line now causes a compile-time error
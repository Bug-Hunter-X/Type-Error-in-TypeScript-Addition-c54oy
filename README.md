# Type Error in TypeScript Addition

This repository demonstrates a common type error in TypeScript that occurs when performing arithmetic operations with mismatched types.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call `add` with a number and a string, resulting in a type error during compilation.

## Solution

The solution involves ensuring that both arguments passed to the `add` function are of type number. This can be achieved through explicit type casting or by modifying the function's signature to accept other types if appropriate.

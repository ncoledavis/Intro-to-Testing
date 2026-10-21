import { test, expect } from "@jest/globals";

import {
  isEven,
  add,
  divide,
  palindrome,
  countVowels,
  findMax,
  removeDuplicates,
} from "../src/functions";

// test("isEven num even", () => {
//   expect(isEven(10)).toBe(true);
// });

// test("isEven num odd", () => {
//   expect(isEven(11)).toBe(false);
// });

// test("palindrome is a palindrome", () => {
//   expect(palindrome("racecar")).toBe(true);
// });

// test("palindrome is not a palindrome", () => {
//   expect(palindrome("hello")).toBe(false);
// });

// test("countVowels word with vowels", () => {
//   expect(countVowels("education")).toBe(5);
// });

// test("countVowels word without vowels", () => {
//   expect(countVowels("rhythm")).toBe(0);
// });

test("broken test (intentional failure)", () => {
  expect(isEven(10)).toBe(false);
});

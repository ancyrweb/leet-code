import { romanToInt } from "./13-roman-to-int";

it("13 - Roman to Int", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("IV")).toBe(4);
  expect(romanToInt("V")).toBe(5);
  expect(romanToInt("X")).toBe(10);
  expect(romanToInt("XIV")).toBe(14);
  expect(romanToInt("XV")).toBe(15);
  expect(romanToInt("XVIII")).toBe(18);
  expect(romanToInt("XIX")).toBe(19);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

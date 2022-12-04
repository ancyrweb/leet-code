import { equalFrequency } from "./2423-equal-frequency";

it("2423 - Equal Frequency", () => {
  expect(equalFrequency("babbdd")).toBe(false);
  expect(equalFrequency("abbcc")).toBe(true);
  expect(equalFrequency("bac")).toBe(true);
  expect(equalFrequency("cccaa")).toBe(true);
  expect(equalFrequency("aacaa")).toBe(true);
  expect(equalFrequency("ddaccb")).toBe(false);

  expect(equalFrequency("aaabbbcccc")).toBe(true);
  expect(equalFrequency("zz")).toBe(true);
  expect(equalFrequency("cccdddaaaa")).toBe(true);
  expect(equalFrequency("cbccca")).toBe(false);
  expect(equalFrequency("ccab")).toBe(true);
  expect(equalFrequency("aazz")).toBe(false);
  expect(equalFrequency("abcde")).toBe(true);
});

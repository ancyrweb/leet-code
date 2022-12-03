import { romanToInt } from "./13-roman-to-int";
import { longestCommonPrefix } from "./14-longest-common-prefix";

it("14 - Longest common prefix", () => {
  expect(longestCommonPrefix(["flight", "flow", "flower"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix(["potter", "potwer", "potwder"])).toBe("pot");
});

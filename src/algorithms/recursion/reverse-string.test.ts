const doReverseString = (val: string[], index: number): string[] => {
  const opposite = val.length - (index + 1);
  if (index > opposite) {
    return val;
  }

  const temp = val[index];

  val[index] = val[opposite];
  val[opposite] = temp;
  return doReverseString(val, index + 1);
};

const reverseString = (val: string) => {
  const arrResult = doReverseString(val.split(""), 0);
  return arrResult.join("");
};

describe("reverse-string", () => {
  it("should reverse the string", () => {
    expect(reverseString("chazam")).toBe("mazahc");
    expect(reverseString("salut")).toBe("tulas");
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("a")).toBe("a");
  });
});

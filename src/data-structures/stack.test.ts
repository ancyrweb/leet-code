import { Stack } from "./stack";
describe("create", () => {
  it("should create an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it("should create a stack with one element", () => {
    const stack = new Stack(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.getValues()).toEqual([1]);
  });

  it("should create a stack with multiple elements", () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(3);
    expect(stack.getValues()).toEqual([3, 2, 1]);
  });
});

describe("pop", () => {
  it("should pop nothing", () => {
    const stack = new Stack();
    const top = stack.pop();
    expect(top).toBe(undefined);
  });

  it("should pop values when there are elements", () => {
    const stack = new Stack([1, 2, 3]);
    const top = stack.pop();
    expect(top).toBe(3);
    expect(stack.size()).toBe(2);
    expect(stack.getValues()).toEqual([2, 1]);
  });
});
describe("push", () => {
  it("should push into empty stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.getValues()).toEqual([1]);
    stack.push(2);
    expect(stack.getValues()).toEqual([2, 1]);
  });
});

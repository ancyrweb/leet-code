import { Graph } from "./graph";

describe("new", () => {
  it("should create a graph", () => {
    const graph = new Graph();
    expect(graph.size()).toBe(0);
  });

  it("should create a graph with an empty array", () => {
    const graph = new Graph([]);
    expect(graph.size()).toBe(0);
  });

  it("should create a graph with edges", () => {
    const graph = new Graph([[1], [0]]);
    expect(graph.size()).toBe(2);
  });
});

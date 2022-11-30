import { Graph, Node } from "./graph";

describe("new", () => {
  it("should create a graph", () => {
    const graph = new Graph();
    expect(graph.size()).toBe(0);
  });

  it("should create a graph with an empty array", () => {
    const graph = new Graph({});
    expect(graph.size()).toBe(0);
  });

  it("should create a graph with edges", () => {
    const graph = new Graph({
      a: new Node(["b"]),
      b: new Node(["a"]),
    });
    expect(graph.size()).toBe(2);
    expect(graph.getEdges("a")).toEqual(["b"]);
    expect(graph.getEdges("b")).toEqual(["a"]);
  });
  it("should create a larger graph", () => {
    const graph = new Graph({
      a: new Node(["b", "c"]),
      b: new Node(["a"]),
      c: new Node(["a"]),
    });

    expect(graph.size()).toBe(3);
    expect(graph.getEdges("a")).toEqual(["b", "c"]);
    expect(graph.getEdges("b")).toEqual(["a"]);
    expect(graph.getEdges("c")).toEqual(["a"]);
  });
  it("should throw when creating an invalid graph", () => {
    expect(() => {
      new Graph({
        a: new Node(["b", "c"]),
        b: new Node(["a"]),
      });
    }).toThrow("Cannot find edge 'c' for node 'a'");
  });
});
describe("add node", () => {
  it("should add a node to an empty graph", () => {
    const graph = new Graph();
    expect(graph.getEdges("a")).toEqual(undefined);

    graph.add("a", new Node([]));

    expect(graph.size()).toBe(1);
    expect(graph.getEdges("a")).toEqual([]);
  });

  it("should add a node to an existing graph", () => {
    const graph = new Graph({
      a: new Node([]),
    });

    graph.add("b", new Node(["a"]));

    expect(graph.size()).toBe(2);
    expect(graph.getEdges("a")).toEqual(["b"]);
    expect(graph.getEdges("b")).toEqual(["a"]);
  });
  it("should throw when trying to add an absent edge", () => {
    const graph = new Graph();

    expect(() => graph.add("a", new Node(["b"]))).toThrow(
      "Cannot add edge 'b' to node 'a' because it doesn't exist."
    );
  });
});

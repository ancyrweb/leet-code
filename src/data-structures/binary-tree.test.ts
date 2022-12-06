import { BinarySearchTree } from "./binary-tree";
describe("create tree", () => {
  it("should create a tree", () => {
    const tree = new BinarySearchTree();
    tree.insert([10, 8, 12, 6, 9, 11, 13]);

    expect(tree.rootNode().val).toBe(10);
    expect(tree.rootNode().left!.val).toBe(8);
    expect(tree.rootNode().right!.val).toBe(12);
    expect(tree.rootNode().left!.left!.val).toBe(6);
    expect(tree.rootNode().left!.right!.val).toBe(9);
    expect(tree.rootNode().right!.left!.val).toBe(11);
    expect(tree.rootNode().right!.right!.val).toBe(13);
  });

  it("should traverse the tree preOrder", () => {
    const tree = new BinarySearchTree();
    tree.insert([10, 8, 12, 6, 9, 11, 13]);
    expect(tree.preOrder()).toEqual([10, 8, 6, 9, 12, 11, 13]);
  });
  it("should traverse the tree inOrder", () => {
    const tree = new BinarySearchTree();
    tree.insert([10, 8, 12, 6, 9, 11, 13]);
    expect(tree.inOrder()).toEqual([6, 8, 9, 10, 11, 12, 13]);
  });
  it("should traverse the tree postOrder", () => {
    const tree = new BinarySearchTree();
    tree.insert([10, 8, 12, 6, 9, 11, 13]);
    expect(tree.postOrder()).toEqual([6, 9, 8, 11, 13, 12, 10]);
  });
  it("should do a BFS", () => {
    const tree = new BinarySearchTree();
    tree.insert([10, 8, 12, 6, 9, 11, 13]);
    expect(tree.bfs()).toEqual([10, 8, 12, 6, 9, 11, 13]);
  });
});

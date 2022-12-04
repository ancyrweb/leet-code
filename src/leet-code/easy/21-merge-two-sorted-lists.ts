// https://leetcode.com/problems/merge-two-sorted-lists/

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let a: any = list1,
    b: any = list2;

  if (!a && !b) {
    return null;
  }

  let root: any = null;
  let node: any = null;
  while (a || b) {
    let nextVal;

    if (a && b) {
      if (a.val < b.val) {
        nextVal = a.val;
        a = a.next;
      } else {
        nextVal = b.val;
        b = b.next;
      }
    } else if (a) {
      nextVal = a.val;
      a = a.next;
    } else if (b) {
      nextVal = b.val;
      b = b.next;
    }

    if (!root) {
      root = new ListNode(nextVal);
      node = root;
    } else {
      node.next = new ListNode(nextVal);
      node = node.next;
    }
  }

  return root;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toArray() {
    let out = [];
    let node: any = this;
    while (node) {
      out.push(node.val);
      node = node.next;
    }

    return out;
  }
}

export const arrayToList = (elem: number[]) => {
  let root = null;
  let node: any = null;
  for (let i = 0; i < elem.length; i++) {
    if (!root) {
      root = new ListNode(elem[i]);
      node = root;
    } else {
      node!.next = new ListNode(elem[i]);
      node = node!.next;
    }
  }

  return root;
};

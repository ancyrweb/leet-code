export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let a = new Map();
  let b = new Map();

  for (let c of s) {
    if (a.has(c)) {
      a.set(c, a.get(c) + 1);
    } else {
      a.set(c, 1);
    }
  }
  for (let c of t) {
    if (b.has(c)) {
      b.set(c, b.get(c) + 1);
    } else {
      b.set(c, 1);
    }
  }

  for (let [key, val] of a.entries()) {
    if (b.get(key) !== val) {
      return false;
    }
  }
  for (let [key, val] of b.entries()) {
    if (a.get(key) !== val) {
      return false;
    }
  }

  return true;
}

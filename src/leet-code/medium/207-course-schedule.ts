export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  let req: Record<string, number[]> = {};
  for (let [c, pre] of prerequisites) {
    if (!req[c]) {
      req[c] = [pre];
    } else {
      req[c].push(pre);
    }

    if (!req[pre]) {
      req[pre] = [];
    }
  }

  let visiting = new Set();

  function traverse(idx: string) {
    if (req[idx].length === 0) {
      return true;
    }

    if (visiting.has(idx)) {
      return false;
    }

    visiting.add(idx);
    for (const subIdx in req[idx]) {
      let c = req[idx][subIdx].toString();
      let finishable = traverse(c);
      if (!finishable) {
        return false;
      }
    }

    req[idx] = [];
    visiting.delete(idx);
    return true;
  }

  for (let c in req) {
    let finishable = traverse(c);
    if (!finishable) {
      return false;
    }
  }

  return true;
}

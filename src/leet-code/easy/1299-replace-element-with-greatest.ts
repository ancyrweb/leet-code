export function replaceElements(arr: number[]): number[] {
  let lastEl = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    let nextEl = arr[i];
    arr[i] = lastEl;
    if (nextEl > lastEl) {
      lastEl = nextEl;
    }
  }

  arr[arr.length - 1] = -1;
  return arr;
}

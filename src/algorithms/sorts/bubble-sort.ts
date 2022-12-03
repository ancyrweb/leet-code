export const bubbleSort = (array: number[]) => {
  let didSwap = false;
  do {
    didSwap = false;
    for (let x = 0; x < array.length - 1; x++) {
      if (array[x] > array[x + 1]) {
        const temp = array[x];
        array[x] = array[x + 1];
        array[x + 1] = temp;
        didSwap = true;
      }
    }
  } while (didSwap);

  return array;
};

export const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let currIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currIdx]) {
        currIdx = j;
      }
    }
    if (currIdx !== i) {
      const temp = array[i];
      array[i] = array[currIdx];
      array[currIdx] = temp;
    }
  }

  return array;
};

export const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }

  return array;
};

export const mergeSort = (array: number[]): number[] => {
  if (array.length === 1) {
    return [array[0]];
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const leftMerged = mergeSort(left);
  const rightMerged = mergeSort(right);
  const output: number[] = [];

  let l = 0;
  let r = 0;
  for (let i = 0; i < array.length; i++) {
    if (l === leftMerged.length) {
      output.push(rightMerged[r]);
      r++;
    } else if (r === rightMerged.length) {
      output.push(leftMerged[l]);
      l++;
    } else {
      if (leftMerged[l] < rightMerged[r]) {
        output.push(leftMerged[l]);
        l++;
      } else {
        output.push(rightMerged[r]);
        r++;
      }
    }
  }

  return output;
};

export const quickSort = (array: number[]): number[] => {
  doQuickSort(array, 0, array.length - 1);
  console.log("here the result", array);
  return array;
};

const doQuickSort = (array: number[], start: number, end: number) => {
  if (start >= end) {
    return array;
  }

  const partition = quickSortPartition(array, start, end);
  doQuickSort(array, start, partition - 1);
  doQuickSort(array, partition + 1, end);
  return array;
};

const quickSortPartition = (array: number[], start: number, end: number) => {
  const printVizual = (title?: string) => {
    let elem = "";
    let pointer = "";
    for (let a = start; a < end; a++) {
      elem += array[a].toString() + " ";
      if (a === i && a === swapIndex) {
        pointer += "X";
      } else if (a === i) {
        pointer += "I";
      } else if (a === swapIndex) {
        pointer += "S";
      } else {
        pointer += " ";
      }
      pointer += " ";
    }

    console.log(
      [
        title || "--- VISUALIZATION ---",
        pointer,
        elem + "| " + array[pivotIndex],
      ].join("\n")
    );
  };

  // pick pivot at the end
  const pivotIndex = end;
  const pivot = array[end];

  let swapIndex = pivotIndex - 1;
  let i = start;

  for (; i <= pivotIndex - 1; i++) {
    printVizual();

    if (i === swapIndex) {
      break;
    }

    if (array[i] > pivot) {
      let temp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = temp;
      swapIndex--;
    }
  }

  if (array[swapIndex] > array[pivotIndex]) {
    array[pivotIndex] = array[swapIndex];
    array[swapIndex] = pivot;
  }

  printVizual("------ RESULT ------");
  return swapIndex;
};
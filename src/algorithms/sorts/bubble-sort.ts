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

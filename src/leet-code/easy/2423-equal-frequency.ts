// https://leetcode.com/problems/remove-letter-to-equalize-frequency/
export function equalFrequency(word: string): boolean {
  const map: Record<string, number> = {};
  for (let c of word) {
    map[c] ? map[c]++ : (map[c] = 1);
  }

  let array = Object.values(map);
  if (array.length === 1) {
    return true;
  } else if (array.length === 2) {
    return array.some((a) => a === 1) || Math.abs(array[0] - array[1]) === 1;
  } else {
    let oneCounts = 0;
    let freqMap: Record<number, number> = {};
    for (let v of array) {
      if (v === 1) {
        oneCounts++;
      }

      if (!freqMap[v]) {
        freqMap[v] = 1;
      } else {
        freqMap[v]++;
      }
    }

    if (
      oneCounts === array.length ||
      (oneCounts === 1 && Object.keys(freqMap).length === 2)
    ) {
      return true;
    }
  }

  // Check if they're all the same occurence
  for (let k in array) {
    array[k]--;
    let isValid = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] !== array[i]) {
        array[k]++;
        isValid = false;
        break;
      }
    }

    if (isValid) {
      return true;
    }
  }
  return false;
}

function equalFrequencyWithReverseLoop(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    // Skip the current letter
    const cur: string = word.slice(0, i) + word.slice(i + 1);

    const count = Object.values(
      [...cur].reduce((prev, curr) => {
        if (!prev[curr]) {
          prev[curr] = 1;
        } else {
          prev[curr]++;
        }
        return prev;
      }, {} as Record<string, number>)
    );

    console.log(i, cur, count);

    if (count.length === 1) {
      // only one letter
      return true;
    }

    for (let j = 1; j < count.length; j++) {
      if (count[j] !== count[j - 1]) {
        break;
      }

      if (j === count.length - 1) {
        return true;
      }
    }
  }
  return false;
}

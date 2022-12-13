/**
 * Returns a random integer between min and max
 * @param min
 * @param max
 * @returns {*}
 */
export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Swaps two values in an array
 * @param list
 * @param left
 * @param right
 */
export const swap = (list, left, right) => {
  const value = list[left];
  list[left] = list[right];
  list[right] = value;
};

/**
 * Arranges values in an array such that,
 *  + values before the pivot are less than or equal to the index value
 *  + values after the pivot are greater than or equal to the index value
 * @param list
 * @param start
 * @param end
 * @param index  optional, defaults to a random index
 */
export const partition = (list, start, end, index = random(start, end)) => {
  let value = list[index];
  let lo = start - 1;
  let hi = end + 1;

  while (true) {
    do {
      lo++;
    } while (list[lo] < value);

    do {
      hi--;
    } while (list[hi] > value);

    if (lo >= hi) {
      return hi;
    }

    swap(list, lo, hi);
  }
};

/**
 * Runs or steps through the Quick Sort algorithm.
 * @param values  an unsorted array of integers
 * @returns {{stack, step: function(), sort: function(), list: *[]}}
 */
export const QuickSort = (values) => {
  const list = [...values];
  const stack = [[0, list.length - 1]];

  const step = () => {
    if (stack.length === 0) {
      return { complete: true };
    }

    const [left, right] = stack.pop();
    if (left >= right) {
      return { complete: false };
    }

    const pivot = partition(list, left, right);
    stack.push([left, pivot]);
    stack.push([pivot + 1, right]);

    return { complete: false };
  };

  const sort = () => {
    let result;
    do {
      result = step();
    } while (!result.complete);
    return list;
  };

  return {
    list,
    stack,
    step,
    sort
  };
};

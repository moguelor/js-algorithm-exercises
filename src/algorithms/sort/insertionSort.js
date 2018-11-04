
/** Insertion sort algorithm */

const insertionSort = function (data) {
    let i, j;
    for (j = 1; j < data.length; j++) {
        let currentValue = data[j];
        for (i = j - 1; i >= 0 && data[i] > currentValue; i--) {
            data[i + 1] = data[i];
        }
        data[i + 1] = currentValue;
    }
    return data;
}

export default insertionSort;
import insertionSort from './insertionSort';


it('Testing insertion sort algorithm.', () => {

    const input = [5,2,3,6,1,4];
    const output = [1,2,3,4,5,6]

    return expect(insertionSort(input)).toEqual(output);

})
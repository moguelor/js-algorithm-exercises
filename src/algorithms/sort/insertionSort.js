
/** Insertion sort algorithm */

const insertionSort = function(input){
    
    for(let j=1; j<input.length; j++){

        let key = input[j];
        let i=j-1;

        while ( i>=0 && input[i]>key){
            input[i + 1] = input[i];
            i = i - 1;
        }

        input[i + 1] = key; 
    }

    return input;
}

export default insertionSort;
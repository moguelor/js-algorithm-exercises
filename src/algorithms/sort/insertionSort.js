/**
 * Algoritmo de insersion.
 * 
 * 1. Recorrer todos los elementos del arreglo de izquierda a derecha.
 * 2. Recorrer todos los elementos del arreglo dependiendo del valor actual de derecha a izquierda.
 * 3. Agregar validación para terminar el ciclo interior únicamente si el valor del elemento anterior es menor al current.
 * 4. Hacer movimiento de valores de izquierda a derecha. 
 * 5. Insertar el elemento actual en el lugar correspondiente
 */
function insertionSort(data) {

    let i, j, currentValue;

    for (i = 1; i < data.length; i++) {
        currentValue = data[i];

        for (j = i - 1; j >= 0 && (data[j] > currentValue); j--) {
            data[j + 1] = data[j];
        }

        data[j + 1] = currentValue;
    }

    console.log(data);
}

export default insertionSort;
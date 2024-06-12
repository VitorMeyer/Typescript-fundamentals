
class ArrayMath {
    async sumArray(array: number[]): Promise<number> {
            let result = 0;
            for (let i = 0; i < array.length; i++) {
                result += array[i];
            }
        return result;
    }
    async reverseArray(array: number[]): Promise<number[]> {
            const length = array.length;
            for(let i=0 ; i< length /2 ; i++){
                let result = array[i]
                array[i]= array[length-1-i]
                array[length-1-i] = result;
            }
        return array;
    }
    async findMinimumMaxinum(array: number[]): Promise<number[]> {
            let min = Infinity
            let max= -Infinity
            let count = 0
            do {
                if(array[count] < min){
                    min = array[count]
                }else if(array[count] > max){
                    max = array[count]
                }
                count++

            } while (count < array.length)

        return [min,max]
    }
    
    async sortArray(array: number[]): Promise<number[]> {
        let n = array.length;
        let result = array.slice()
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (result[j] > result[j + 1]) {
                  
                    let temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
        
        return result;
    }
    
}
const arrayMath = new ArrayMath();

const sumArray = arrayMath.sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]).then(result => {
    console.log("Resultado da soma do array: ",result);  // Expected output: "45"
});
const reverseArray = arrayMath.reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9 ]).then(result => {
    console.log("Resultado da reverção do array: ",result);  // Expected output: "[9, 8, 7, 6, 5, 4, 3, 2, 1]"
      
});
const findMinimumMaxinum = arrayMath.findMinimumMaxinum([1, 2, 3, 4, 5, 6, 7, 8, 9, 16, -5]).then(result => {
    console.log(`Menor valor: ${result[0]}, Maior valor: ${result[1]}`); // Expected output: "[-5,16]"
      
});
const sortArray = arrayMath.sortArray([8, 2, 9, 4, 5, 6, 7, 1, 3]).then(result => {
    console.log("Resultado da ordenação do array: ",result);  // Expected output: "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
      
});

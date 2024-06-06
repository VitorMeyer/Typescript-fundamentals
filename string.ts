
 class StringMath {

    /**
     * Reverse a string
     * @param str 
     */
    async ReverseWordsString(str: string): Promise<string> {
        let arr = str.split('')
        let aux = "";
        let result = "";
        let count = 0;
        do {
            aux =arr[count];
            arr[count] = arr[arr.length - count - 1];
            arr[(arr.length -1)- count] = aux
            count++
            
        } while (count < Math.floor(arr.length / 2));

        for (let i = 0; i < arr.length ; i++){
            result += arr[i];
            if(i < arr.length -1){
                result += " ";
            }
        }
        return result;
    }
   
    async smallestString(str: string[]): Promise<string> {
        let min = str[0].length;
        let result = str[0]
        for (let i=1; i < str.length;i++){
            if(str[i].length < min){
                min = str[i].length;
                result = str[i];
            }
        }

        return result;
    }

     

}

const stringMath = new StringMath();

const StringRevers =  stringMath.ReverseWordsString("Hello World").then(result => {
    console.log("Resultado da string ao contrário: ",result);  // Expected output: "d l r o W o l l e H"
});

const StringSmallest = stringMath.smallestString(["Hello", "World", "Hello World"]).then(result => {
    console.log("Resultado da string com menor tamanho: ",result);  // Expected output: "Hello"
});
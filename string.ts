
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
                result ;
            }
        }
        return result;
    }
   
    async smallestString(str: string[]): Promise<number> {
        let min = str[0].length;
        let result = str[0]
        for (let i=1; i < str.length;i++){
            if(str[i].length < min){
                min = str[i].length;
                result = str[i];
            }
        }

        return (min);
    }

     async minimunPrefixString(str: string[]): Promise<string> {
        let min = await this.smallestString(str)
        let result = ""

        
        for (let i=0; i < min; i ++){
            const  charCurrent = str[0][i]

            for(let j=1; j<str.length; j++){
                if(str[j][i] !== charCurrent){
                    return result;
                }
            }

            result += charCurrent;
        }
    return result;

    }

    async romanToInt(str: string): Promise<number> {
        const map: {[key:string]:number} = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        let result = 0;
        let prevValue = 0;
        for(let i= str.length -1; i >= 0; i--){
            const currentValue = map[str[i]];
                if(currentValue < prevValue){
                    result -= currentValue
                } else {
                    result += currentValue
                }
                prevValue = currentValue;
        }
        return result;
    }


};
const stringMath = new StringMath();

const StringRevers =  stringMath.ReverseWordsString("Hello World").then(result => {
    console.log("Resultado da string ao contrário: ",result);  // Expected output: "d l r o W o l l e H"
});

const StringSmallest = stringMath.smallestString(["Hello", "World", "Hello World"]).then(result => {
    console.log("Resultado da string com menor tamanho: ",result);  // Expected output: "Hello"
});
const StringMinimunPrefix = stringMath.minimunPrefixString([ "flower", "flow", "flight" ]).then(result => {
    console.log("Resultado do menor prefixo: ",result);  // Expected output: "fl"
});
const romanNumber = "MCMXCIV"
const StringRomanToInt = stringMath.romanToInt(romanNumber).then(result => {
    console.log(`Resultado da conversão do número romano ${romanNumber} para inteiro: `,result);  // Expected output: 1994
});
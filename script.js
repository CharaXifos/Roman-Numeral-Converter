function convertToRoman(num) {
 const romanNumerals = [["I", "IV", "V","IX"], ["X","XL", "L","XC"], ["C","CD","D", "CM"], ["M"]];
  
 let newNumber = [];
 let arr = num.toString().split("").reverse();
 for(let i = 0; i < arr.length; i++){
     function converter (romanNumerals, arr ){
     let numero = "";
     if(Number(arr[i]) <= 3){
         for(let j = 0; j < Number(arr[i]); j++){
             numero += romanNumerals[i][0]
         }
     }
     else if(Number(arr[i]) <= 4){
         numero = romanNumerals[i][1]
     }
     else if(Number(arr[i]) <= 5){
         numero = romanNumerals[i][2]
     }
     else if(Number(arr[i]) <= 8){
         numero = romanNumerals[i][2]
         for(let j = 5; j < Number(arr[i]); j++){
             numero +=romanNumerals[i][0]
         }
     }
     else{
         numero = romanNumerals[i][3]
     }
     return numero
 }
  newNumber.unshift(converter(romanNumerals, arr))
 }
 return newNumber.join("")
}

convertToRoman(1000);

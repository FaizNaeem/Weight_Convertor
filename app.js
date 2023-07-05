
// Geting Ids
let input_kg= document.getElementById("input_kg")
let input_pount= document.getElementById("pount")
let input_ounce= document.getElementById("ounce")
// 1st input
const Convertor=()=>{
let Multiplication_1 = (input_kg.value * 2.205).toFixed(2);
let Multiplication_2 = (input_kg.value * 35.274).toFixed(2);
input_pount.value = Multiplication_1;
input_ounce.value = Multiplication_2;

}
// second input 
const Convertor_1=()=>{
input_kg.value = (input_pount.value / 2.205).toFixed(2);
input_ounce.value = (input_pount.value * 16).toFixed(2);
}
// }
// third input 
const Convertor_2=()=>{
    input_kg.value = (input_ounce.value / 35.274).toFixed(2);
    input_ounce.value = (input_ounce.value / 16);
    }
    // clear
    const Convertor_main=()=>{
input_kg.value='';
input_pount.value='';
input_ounce.value='';
   
    }
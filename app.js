const Convertor=()=>{

    let input_kg= document.getElementById("input_kg").value
    let multiply = input_kg * 2.20462.toFixed(3);
    let input_pount= document.getElementById("pount").value=`${multiply} Pount`
    var multiply2 = input_kg * 35.27.toFixed(3);
    let input_ounce= document.getElementById("ounce").value=`${multiply2} Ounce`
}

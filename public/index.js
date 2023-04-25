function calculatingDecountingTableValues(firstFreeCashFlow,rateOfGrowth,decountRate,years,cash,totalDebt,sharesOutstanding){
    let acc = 0;
    let lastFc;
    for(i = 1; i <= years; i++){
        let result = firstFreeCashFlow*Math.pow(rateOfGrowth,i);
        console.log(`The expected fc for ${i} is: ${result}`);
        if(i == years){
            lastFc = result;
        }

    }
    for(y = 1;y <= years; y++){
        let result = firstFreeCashFlow*Math.pow(rateOfGrowth,y)*Math.pow(decountRate,y);
        acc += result;
        console.log(`The decounted for ${y} years is: ${result}`);
    }
    let intrinsicValue = lastFc*Math.pow(decountRate,years)*10+acc+cash-totalDebt;
    let priceOfStock =  intrinsicValue/sharesOutstanding;   
    return priceOfStock; 
}




const onSubmit = (e) =>{
    e.preventDefault();
    let form = document.querySelector('form');
    let resultTag = document.querySelector('.result');

    let firstFreeCashFlow = parseFloat(form.elements['uno'].value);
    let rateOfGrowth = parseFloat(form.elements['dos'].value);
    let discountRate = parseFloat(form.elements['tres'].value);
    let years = Math.round(parseFloat(form.elements['cuatro'].value));
    let cash = parseFloat(form.elements['cinco'].value);
    let totalDebt = parseFloat(form.elements['seis'].value);
    let sharesOutstanding = parseFloat(form.elements['siete'].value);
    
    let result = calculatingDecountingTableValues(
        firstFreeCashFlow,
        rateOfGrowth,
        discountRate,
        years,
        cash,
        totalDebt,
        sharesOutstanding);
    resultTag.innerHTML += /*html*/`<p>el valor resultante de la accion es: ${Math.trunc(result)}</p>`;
}
form.addEventListener('submit',onSubmit);
const addClassToInput = (e) => {
    if(e.target.nodeName == "input"){
        e.target.classList.add("input-active");
    }
}

let inputs = document.querySelectorAll(".input");
inputs.addEventListener("click", addClassToInput)



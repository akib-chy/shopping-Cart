function updateCaseNumber(item, price, isInscring){
    const itemInput = document.getElementById(item + '-input');
    const itemValueText = itemInput.value;
    let itemValueNumber = parseInt(itemValueText);
    if(isInscring == true){
        itemValueNumber = itemValueNumber + 1;
    }
    else if(itemValueNumber > 0){
        itemValueNumber = itemValueNumber - 1 ;
    }
    itemInput.value =  itemValueNumber;
    const mobilePrice = document.getElementById(item +'-price');
    mobilePrice.innerText = itemValueNumber * price;
    console.log(itemValueNumber);

    calculateValue();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-input');
    const productTotal = parseInt(productInput.value);
    return productTotal;
}
function calculateValue(){
    const phoneTotal = getInputValue('mobile') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 5;
    const totalPrice = subTotal + tax;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// MOBILE ENCREASE DECRIS NUMBER

document.getElementById('mobile-plus-button').addEventListener('click', function(){
    updateCaseNumber('mobile', 1219,true);
})
document.getElementById('mobile-mainas-button').addEventListener('click', function(){
    updateCaseNumber('mobile', 1219, false)
})

// CASE INCRISE DECRIS NUMBER

document.getElementById('case-plus-button').addEventListener('click', function(){
    updateCaseNumber('case' ,59, true);
})
document.getElementById('case-mainas-button').addEventListener('click', function(){
    updateCaseNumber('case',59, false);
})
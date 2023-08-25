const convertButton = document.querySelector(".convert-button")
 
function convertValues(){
    const inputConvertValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHtml = inputCurrencyValue
    
    console.log(convertedValue)
}


convertButton.addEventListener("click", convertValues)

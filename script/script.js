
let formElement = document.querySelector(".js-form");
let radioSellElement = document.querySelector(".js-form__radioSell");
let radioBuyElement = document.querySelector(".js-form__radioBuy");
let dolarSellElement = document.querySelector(".js-form__dolarSell");
let euroSellElement = document.querySelector(".js-form__euroSell");
let funtSellElement = document.querySelector(".js-form__funtSell");
let dolarBuyElement = document.querySelector(".js-form__dolarBuy");
let euroBuyElement = document.querySelector(".js-form__euroBuy");
let funtBuyElement = document.querySelector(".js-form__funtBuy");
let select = document.querySelector(".js-form__select");
let amountElement = document.querySelector(".js-form__amount");
let resultElement = document.querySelector(".js-form__result");
let formResetButton = document.querySelector(".js-formResetButton");
let amountSymbolElement = document.querySelector(".js-from__amountSymbol");

formResetButton.addEventListener("click", () => {
    dolarSellElement.value = (Math.random() * 0.2 + 4).toFixed(3);
    euroSellElement.value = (Math.random() * 0.2 + 3).toFixed(3);
    funtSellElement.value = (Math.random() * 0.2 + 5).toFixed(3);
    dolarBuyElement.value = (Math.random() * 0.2 + 4.1).toFixed(3);
    euroBuyElement.value = (Math.random() * 0.2 + 3.1).toFixed(3);
    funtBuyElement.value = (Math.random() * 0.2 + 5.1).toFixed(3);
});

dolarSellElement.value = (Math.random() * 0.2 + 4).toFixed(3);
euroSellElement.value = (Math.random() * 0.2 + 3).toFixed(3);
funtSellElement.value = (Math.random() * 0.2 + 5).toFixed(3);
dolarBuyElement.value = (Math.random() * 0.2 + 4.1).toFixed(3);
euroBuyElement.value = (Math.random() * 0.2 + 3.1).toFixed(3);
funtBuyElement.value = (Math.random() * 0.2 + 5.1).toFixed(3);
formElement.addEventListener("input", (event) => {
    currency = select.value;
    if (radioSellElement.checked) {
        switch (currency) {
            case "Dolar": amountSymbolElement.innerText = "(warotść w dolarach)" 
            console.log(amountSymbolElement.innerText.length);
                break;
            case "Euro": amountSymbolElement.innerText = "(warotść w euro)"
            console.log(amountSymbolElement.innerText.length);
                break;
            case "Funt": amountSymbolElement.innerText = "(warotść w funtach)"
                break;
        };
    } else {
        amountSymbolElement.innerText = "(warotść w złotych)"
    };


});


formElement.addEventListener("submit", (event) => {

    event.preventDefault();
    currency = select.value;

    dolarSell = dolarSellElement.value;
    euroSell = euroSellElement.value;
    funtSell = funtSellElement.value;
    dolarBuy = dolarBuyElement.value;
    euroBuy = euroBuyElement.value;
    funtBuy = funtBuyElement.value;

    amount = amountElement.value;
    radioSell = radioSellElement.checked;
    radioBuy = radioBuyElement.checked;
    if (radioSell === true) {
        switch (currency) {
            case "Dolar":
                resultElement.innerText = `${amount} $ = ${(amount * dolarSell).toFixed(2)} PLN`;
                break;
            case "Euro":
                resultElement.innerText = `${amount} € = ${(amount * euroSell).toFixed(2)} PLN`;
                break;
            case "Funt":
                resultElement.innerText = `${amount} £ = ${(amount * funtSell).toFixed(2)} PLN`;
                break;
        };
    } else if (radioBuy === true) {
        switch (currency) {
            case "Dolar":
                resultElement.innerText = `${amount} PLN = ${(amount / dolarBuy).toFixed(2)} $`;
                break;
            case "Euro":
                resultElement.innerText = `${amount} PLN = ${(amount / euroBuy).toFixed(2)} €`;
                break;
            case "Funt":
                resultElement.innerText = `${amount} PLN = ${(amount / funtBuy).toFixed(2)} £`;
                break;
        };
    }


});



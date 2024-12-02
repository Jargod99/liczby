{
    const onStartRefresh = (dolarSellElement, euroSellElement, funtSellElement, dolarBuyElement, euroBuyElement, funtBuyElement) => {
        dolarSellElement.value = (Math.random() * 0.2 + 4).toFixed(3);
        euroSellElement.value = (Math.random() * 0.2 + 3).toFixed(3);
        funtSellElement.value = (Math.random() * 0.2 + 5).toFixed(3);
        dolarBuyElement.value = (Math.random() * 0.2 + 4.1).toFixed(3);
        euroBuyElement.value = (Math.random() * 0.2 + 3.1).toFixed(3);
        funtBuyElement.value = (Math.random() * 0.2 + 5.1).toFixed(3);
    };
    const refreshButton = (dolarSellElement, euroSellElement, funtSellElement, dolarBuyElement, euroBuyElement, funtBuyElement) => {
        const formResetButton = document.querySelector(".js-formResetButton");
        formResetButton.addEventListener("click", () => {
            dolarSellElement.value = (Math.random() * 0.2 + 4).toFixed(3);
            euroSellElement.value = (Math.random() * 0.2 + 3).toFixed(3);
            funtSellElement.value = (Math.random() * 0.2 + 5).toFixed(3);
            dolarBuyElement.value = (Math.random() * 0.2 + 4.1).toFixed(3);
            euroBuyElement.value = (Math.random() * 0.2 + 3.1).toFixed(3);
            funtBuyElement.value = (Math.random() * 0.2 + 5.1).toFixed(3);
        });
    };

    amountTypeOfCurrency = (amountSymbolElement, select, radioSellElement) => {
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
    };

    const amountResult = (select, dolarSellElement, euroSellElement, funtSellElement, dolarBuyElement, euroBuyElement, funtBuyElement, radioSellElement) => {
        const radioBuyElement = document.querySelector(".js-form__radioBuy");
        const amountElement = document.querySelector(".js-form__amount");
        const resultElement = document.querySelector(".js-form__result");

        const currency = select.value;
        const dolarSell = dolarSellElement.value;
        const euroSell = euroSellElement.value;
        const funtSell = funtSellElement.value;
        const dolarBuy = dolarBuyElement.value;
        const euroBuy = euroBuyElement.value;
        const funtBuy = funtBuyElement.value;
        const amount = amountElement.value;
        const radioSell = radioSellElement.checked;
        const radioBuy = radioBuyElement.checked;

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

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const radioSellElement = document.querySelector(".js-form__radioSell");
        const dolarSellElement = document.querySelector(".js-form__dolarSell");
        const euroSellElement = document.querySelector(".js-form__euroSell");
        const funtSellElement = document.querySelector(".js-form__funtSell");
        const dolarBuyElement = document.querySelector(".js-form__dolarBuy");
        const euroBuyElement = document.querySelector(".js-form__euroBuy");
        const funtBuyElement = document.querySelector(".js-form__funtBuy");
        const select = document.querySelector(".js-form__select");

        onStartRefresh(dolarSellElement, euroSellElement, funtSellElement, dolarBuyElement, euroBuyElement, funtBuyElement);
        refreshButton(dolarSellElement, euroSellElement, funtSellElement, dolarBuyElement, euroBuyElement, funtBuyElement);

        formElement.addEventListener("input", () => {
            const amountSymbolElement = document.querySelector(".js-from__amountSymbol");
            amountTypeOfCurrency(amountSymbolElement, select, radioSellElement);
        });

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            amountResult(select, dolarSellElement, euroSellElement, funtSellElement, dolarBuyElement, euroBuyElement, funtBuyElement, radioSellElement);

        });



    }
    init();
}
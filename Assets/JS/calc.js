
const usdInput = document.getElementById("currencyFrom");
const rurInput = document.getElementById("currencyTo");
let usd = 1;

function usdOnInput() {
    // попробуем получить введённое число и превратить его в число с плавающей точкой
    // На случай, если используемый десятичный разделитель - запятая, заменим его на точку
    const parsedVal = parseFloat(usdInput.value.replace(",", ".")); 
    if (!isNaN(parsedVal)) { // в поле число, а не что-то другое
        rurInput.value = (parsedVal * usd).toFixed(2);
    }
};
function rubOnInput() {
    const parsedVal = parseFloat(rurInput.value.replace(",", "."));
    if (!isNaN(parsedVal)) {
        usdInput.value = (parsedVal / usd).toFixed(2);
    }
};


fetch("https://www.floatrates.com/daily/rub.json").then(function(response) { // или https://www.cbr-xml-daily.ru/daily_json.js 
    if (!response.ok) { // Курс не загрузился
        alert("Ошибка запроса курса валют");
    } else {
        response.json().then(function(data) {
            usd = 1 / data.usd.rate; // Если использовать https://www.cbr-xml-daily.ru/daily_json.js то data.Valute.USD.Value;
            // Начальные значения калькулятора: 1 для USD, 1 * курс для рубля
            usdInput.value = "1";
            rurInput.value = usd.toFixed(2);

        });
    }
});
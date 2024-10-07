const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('result');

let currentInput = '0';
let previousInput = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (isNumber(value)) {
            handleNumber(value);
        } else if (isOperator(value)) {
            handleOperator(value);
        } else if (value === 'clear') {
            clearAll();
        } else if (value === 'PlusMinus') {
            toggleSign();
        } else if (value === '&#37;') {
            handlePercentage();
        } else if (value === '&equals;') {
            calculate();
        } else if (value === '.') {
            addDecimal();
        }

        updateresult();
    });
});

function isNumber(value) {
    return !isNaN(value);
}

function isOperator(value) {
    return value === '÷&#247;' || value === '&times;' || value === '&minus;' || value === '&plus;';
}

function handleNumber(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
}

function handleOperator(value) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '&plus;':
            result = prev + curr;
            break;
        case '&minus;':
            result = prev - curr;
            break;
        case '&times;':
            result = prev * curr;
            break;
        case '÷&#247;':
            result = prev / curr;
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
}


function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearScreen() {
    document.getElementById("result").value = " ";
}

function deleteChar() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
function togglesign(){
    const result = document.getElementById("result")
    let currentValue = parseFloat(result.value);
    currentValue = currentValue 
    * -1;
    result.value = currentValue;
}

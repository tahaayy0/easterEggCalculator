let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
var d = new Date();
var password;

console.log(password)

setInterval(clock, 1000);

function clock() {
  var d = new Date();
  password = d.getHours() * d.getMinutes();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (firstOperand === '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = op;
    } else if (secondOperand === '') {
        secondOperand = currentInput;
        calculate();
        firstOperand = document.getElementById('display').value;
        currentInput = '';
        operator = op;
    }
}

function calculate() {
    if (firstOperand !== '' && operator !== '' && currentInput !== '') {
        secondOperand = currentInput;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                if(result == password){
                    openSecretNotes();
                }
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        document.getElementById('display').value = currentInput;
        firstOperand = '';
        secondOperand = '';
        operator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    document.getElementById('display').value = '';
}

function openSecretNotes() {
    document.getElementById('secretNotes').style.display = 'flex';
}

function saveNotes() {
    const notes = document.getElementById('notes').value;
    alert('Notlar Kaydedildi: ' + notes);
}

function closeNotes() {
    document.getElementById('secretNotes').style.display = 'none';
}


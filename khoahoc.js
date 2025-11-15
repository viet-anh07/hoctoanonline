function ketquatinhtoan() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2')
    const operatorElement = document.getElementById('cong-tru-js')
    
    if (!num1Element || !num2Element || !operatorElement ) {
        console.error("Không tìm thấy số")
        return
    }

const num1 = parseFloat(num1Element.value);
const num2 = parseFloat(num2Element.value)
const operator = operatorElement.value;

let result = 0
let operationSymbol = '';

switch (operator) {
    case '+':
        result = num1 + num2;
        operationSymbol = '+';
        break
    case '-':
        result = num1 - num2;
        operationSymbol = '-'
        break
    case '*':
        result = num1 * num2;
        operationSymbol = 'x';
        break
    case '/':
        if (num2 === 0) {
            alert("Không thể chia cho 0")
            document.getElementById('hien-thi-kq').innerHTML = 'Không thể chia cho 0'
            return;
        }
        result = num1 / num2
        operationSymbol = '/'
        break;
    default:
        document.getElementById('hien-thi-kq').innerHTML = 'Phép toán không phù hợp'
        return;
    }

    const resultElement = document.getElementById('hien-thi-kq');
    const visualizationArea = document.getElementById('ket-qua')

    resultElement.innerHTML = `Kết quả ${num1} ${operationSymbol} ${num2} = ${result.toFixed(2)}`;
    resultElement.style.backgroundColor = 'brown'
    resultElement.style.color = 'aqua'

    if (operator === '+' && num1 >= 0 && num1 <= 10 && num2 >= 0 && num2 <= 10 && Number.isInteger(num1) && Number.isInteger(num2)) {
        let viz = 'quả '.repeat(num1) + '<span style="font-size: 24px; font-weight: bold;">+</span> '+'quả  '.repeat(num2);
        visualizationArea.innerHTML = viz;
        visualizationArea.style.textAlign = 'center';
        visualizationArea.style.fontSize = '30px'
    } else {
        visualizationArea.innerHTML = '';
    }
    }

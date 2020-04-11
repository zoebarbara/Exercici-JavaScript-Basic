function calculadora() {
    let resultado;
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    
    switch(operador){ 
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "La operación no está contemplada";
    }

    document.getElementById("demo").innerHTML= resultado;
}


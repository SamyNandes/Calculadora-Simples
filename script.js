var valor2 = ""
var valor = ""
var operando = ""
var resultado = ""
function adicionar(n){
    if(typeof n === "number" || operando != ""){
        valor += n.toString()
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
    } 
    switch(n){
        case "+":
        operando = "+"
        valor2 = valor
        valor = ""
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
        break;
        case "-": 
        operando = "-"
        valor2 = valor
        valor = ""
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
        break;
        case "*": 
        operando = "*"
        valor2 = valor
        valor = ""
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
        break;
        case "/": 
        operando = "/"
        valor2 = valor
        valor = ""
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
        break;
    }
    if(n === '='){
        switch(operando){
        case "+":
                resultado = parseFloat(valor2) + parseFloat(valor)
                break;
            case "-": 
                resultado = parseFloat(valor2) - parseFloat(valor)
                break;
            case "*": 
                resultado = parseFloat(valor2) * parseFloat(valor)
            break;
            case "/": 
                if (parseFloat(valor) === 0){
                    novoCalculo()
                } else {
                    resultado = parseFloat(valor2) / parseFloat(valor)
                    document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
                } break;
        }
        if (isNaN(parseFloat(valor2)) || isNaN(parseFloat(valor)) || isNaN(resultado)  == true){
            novoCalculo()
            document.getElementById("tela").innerHTML = "Erro, faça um novo cálculo"
        } else {  
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado    
        }
    }
}
function novoCalculo(){
    resultado = ""
    document.getElementById("tela").innerHTML = ""
    valor2 = ""
    valor = ""
    operando = ""
}
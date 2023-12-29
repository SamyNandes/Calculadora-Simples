var valor2 = ""
var valor = ""
var operando = ""
var resultado = ""
function adicionar(n){
    if(typeof n === "number" || operando != ""){
        valor += n.toString()
        document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
        console.log(valor)
        console.log(valor2)
    } 
    switch(n){
        case "+":
        operando = "+"
        valor2 = valor
        valor = ""
        break;
        case "-": 
        operando = "-"
        valor2 = valor
        valor = ""
        break;
        case "*": 
        operando = "*"
        valor2 = valor
        valor = ""
        break;
        case "/": 
        operando = "/"
        valor2 = valor
        valor = ""
        break;
    }
    if(n === '='){
        switch(operando){
        case "+":
                resultado = parseFloat(valor2) + parseFloat(valor)
                document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
            break;
            case "-": 
                resultado = parseFloat(valor2) - parseFloat(valor)
                document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
            break;
            case "*": 
                resultado = parseFloat(valor2) * parseFloat(valor)
                document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
            break;
            case "/": 
                if (parseFloat(valor) === 0){
                    novoCalculo()
                    document.getElementById("tela").innerHTML = "erro"
                } else {
                    resultado = parseFloat(valor2) / parseFloat(valor)
                    document.getElementById("tela").innerHTML = valor2 + operando + valor + resultado
                }    
            break;
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
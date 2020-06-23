let listElement = document.querySelector('#app, ul')
let inputPeso = document.querySelector('input[name=peso]')
let inputAltura = document.querySelector('input[name=altura]')
let btnCalculate = document.querySelector('button.btn')
let btnClear = document.querySelector('button.clear')

btnClear.onclick = function () {
    window.reloadPage()
}

btnCalculate.onclick = function () {
    let peso = inputPeso.value
    let altura = inputAltura.value
    let calculaIMC = peso / (altura * altura)
    

    switch (calculaIMC) {
        case true:
            calculaIMC < 18.5 && calculaIMC > 1 ? text = `Você esta abaixo do peso seu IMC é ${calculaIMC.toFixed(2)}` :
                calculaIMC >= 18.5 && calculaIMC < 25 ? text = `Você esta com o peso normal, seu IMC é ${calculaIMC.toFixed(2)}` :
                    calculaIMC > 25 && calculaIMC < 30 ? text = `Você esta com sobrepeso, seu IMC é ${calculaIMC.toFixed(2)}` :
                        calculaIMC > 30 ? text = `Você esta com obesidade, seu IMC é ${calculaIMC.toFixed(2)}` :
                            text = 'Digite dados validos conforme exemplo'

    }

    let imcElement = document.createElement('li')
    let imc = document.createTextNode(text)


    imcElement.appendChild(imc)
    listElement.appendChild(imcElement)



}


function reloadPage() {
    window.location.reload()
}

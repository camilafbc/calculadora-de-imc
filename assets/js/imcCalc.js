import { print } from "./print.js" ;

const height = document.querySelector("input[name='height']")
const weight = document.querySelector("input[name='weight']")


function imcCalc() {
    const heightValue = parseFloat(height.value)
    const weightValue = parseFloat(weight.value)


    const imc = (weightValue/(Math.pow(heightValue, 2))).toFixed(2)
    
    print(imc)
    
    height.value = ""
    weight.value = ""
}

export { imcCalc }
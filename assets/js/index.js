import { imcCalc } from "./imcCalc.js";

const height = document.querySelector("input[name='height']")
const weight = document.querySelector("input[name='weight']")


const btn = document.getElementById("btn")


height.addEventListener('input', function(){
    height.value = height.value.replace(/[^0-9\b.]/g, '');
    height.value = height.value.replace(/(\..*)\./g, '$1')
})


weight.addEventListener('input', function(){
    weight.value = weight.value.replace(/[^0-9\b.]/g, '');
    weight.value = weight.value.replace(/(\..*)\./g, '$1')
})


btn.addEventListener('click', imcCalc)

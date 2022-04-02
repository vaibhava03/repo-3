"use strict";
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const btn = document.getElementById('btn');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + " " + num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const res = add(+num1, +num2);
    numResults.push(res);
    const result = add(num1, num2);
    textResults.push(result);
    console.log(res);
    console.log(result);
    printResult({ val: res, timeStamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked!');
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split('w'));
});

const number1=document.getElementById('num1') as HTMLInputElement;
const number2=document.getElementById('num2') as HTMLInputElement;
const btn=document.getElementById('btn')!;

type numOrStr=number|string;
type Result={val:number; timeStamp:Date};

interface  ResultObj{
    val:number; 
    timeStamp:Date
}

const numResults : Array<number>=[];
const textResults :string []=[];


function add(num1:numOrStr, num2:numOrStr){
if(typeof num1==='number'&&typeof num2==='number')
return num1+num2;
else if(typeof num1==='number'&&typeof num2==='number')
return num1+" "+num2;
}

function printResult(resultObj:Result)
{
    console.log(resultObj.val);
}


btn.addEventListener('click',() =>{
const num1=number1.value;
const num2=number2.value;
const res=add(+num1, +num2);
numResults.push(res as number);
const result=add(num1,num2);
textResults.push(result as string);
console.log(res);
console.log(result);
printResult({val:res as number, timeStamp:new Date()})
console.log(numResults, textResults)
})
const myPromise=new Promise<string>((resolve, reject) =>{
    setTimeout(() => {
        resolve('it worked!');
    }, 1000);
})
myPromise.then ((res) =>{
    console.log(res.split('w'));
})

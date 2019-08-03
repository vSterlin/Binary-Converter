function swap() {
    let swapBtn = document.getElementById('sub');
    let textArea = document.getElementsByTagName('textarea')[0];
    let attribute = swapBtn.getAttribute('onclick');
    let resultArea = document.getElementById('result');
    if(attribute=='decToBin()'){
        //console.log('DECIMAL TO BINARY');
        swapBtn.setAttribute('onclick', 'binToDec()');
        textArea.setAttribute('placeholder', 'Enter a binary number here')
    }
    else{
        //console.log('BINARY TO DECIMAL');
        swapBtn.setAttribute('onclick', 'decToBin()');
        textArea.setAttribute('placeholder', 'Enter a decimal number here');
    }

    resultArea.innerHTML= "";

    
    //console.log(swapBtn.onclick);
}


function decToBin(){
let textArea = document.getElementById('textarr');
let val = document.getElementsByTagName('textarea')[0].value;
if(val.length!=0){
val = parseInt(val);
let bin = '';
let newVal = val;
let remainder;

while(newVal!=0){
    remainder = (newVal%2);
    newVal = Math.floor(newVal /= 2);
    //console.log(remainder);
    bin = remainder + bin;
}

//textArea.innerHTML = '';

textArea.value= "";
document.getElementById('result').innerHTML = bin;
}
}

function binToDec(){
let textArea = document.getElementById('textarr');
let val = document.getElementsByTagName('textarea')[0].value;
val += '';
let temp;
let newVal = 0;
let length = val.length;
if(val.length!=0){

for(let i=0;i<length;i++){
temp = parseInt(val.charAt(i));
//console.log(temp);
newVal += temp * Math.pow(2, length-1-i);


}
//textArea.innerHTML = '';
textArea.value= "";
document.getElementById('result').innerHTML = newVal;
//console.log(newVal);
}
}
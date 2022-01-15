function display(num){
    var output = document.getElementById('display');
    output.innerText = num;
console.log('hello');
}

var number1 = "";
var number2 = "";
var operator = "";


 function set(new_operator){
     operator = new_operator;
 }

function add(num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2;
    return sum;
}


function Concate(single){
    if (operator == ""){
    number1 = number1 + single;
    display(number1);
}else{
    number2 = number2 + single;
    display(number2);
}
}
function deletelast () {
    if(operator == ""){
        number1 = number1.slice(0, -1);
    display(number1);
 } else{
     number2 = number2.slice(0, -1);
     display(number2);
 }
    
}
function Clearall(){
    number1 = "";
    display(number1);
}
function equal(){
    if(operator == "+"){
        number1 = add(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
        
    }
        else if(operator == "*"){
            number1 = mul(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator == "/"){
        number1 = div(number1, number2);
    number2 = "";
    operator = "";
    display(number1);
}
else if(operator == "-"){
    number1 = sub(number1, number2);
number2 = "";
operator = "";
display(number1);
}

function mul(num1 , num2){
    return num1 * num2;
}
}
function div(num1 , num2){
    return num1 / num2;
}
function sub(num1, num2){
    return num1 - num2;
}

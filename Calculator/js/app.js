const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const div = document.querySelector('.div');
const mul = document.querySelector('.mul');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const display = document.querySelector('.display');

one.addEventListener('click',()=>{
    display.textContent+='1';
})

two.addEventListener('click',()=>{
    display.textContent+='2';
})
three.addEventListener('click',()=>{
    display.textContent+='3';
})
four.addEventListener('click',()=>{
    display.textContent+='4';
})
five.addEventListener('click',()=>{
    display.textContent+='5';
})
six.addEventListener('click',()=>{
    display.textContent+='6';
})
seven.addEventListener('click',()=>{
    display.textContent+='7';
})
eight.addEventListener('click',()=>{
    display.textContent+='8';
})
nine.addEventListener('click',()=>{
    display.textContent+='9';
})
zero.addEventListener('click',()=>{
    display.textContent+='0';
})
add.addEventListener('click',()=>{
    display.textContent+='+';
})
mul.addEventListener('click',()=>{
    display.textContent+='*';
})
div.addEventListener('click',()=>{
    display.textContent+='/';
})
sub.addEventListener('click',()=>{
    display.textContent+='-';
})
clear.addEventListener('click',()=>{
    display.textContent='';
})
equal.addEventListener('click',()=>{
    display.textContent=eval(display.textContent);
})
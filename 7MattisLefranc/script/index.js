let num1 = '';
let num2 = '';
let continu = 0;
do {
    num1 = prompt("Enter a first number");
    num2 = prompt("Enter a second number");
    if(num1 == num2)
        alert(`${num1} est egale a ${num2}`);

    if(num1 < num2)
        alert(`${num1} est inferieur a ${num2}`);

    if(num1 > num2)
        alert(`${num1} est superieur a ${num2}`);

    continu = confirm("Es ce que vous voulez continuer ?");
}   
while(continu == 1)
window.close();
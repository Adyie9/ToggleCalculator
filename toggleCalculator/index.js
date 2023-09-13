const toggle = document.getElementById('toggleDark');
const cont = document.querySelector('.container');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    this.classList.toggle('fa-star');
   
    if (this.classList.contains('fa-moon')) {
        cont.style.background = 'black';
        cont.style.color = 'white';
        cont.style.transition = '1s';
    } else {
        cont.style.background = 'white';
        cont.style.color = 'black';
        cont.style.transition = '1s';
    }
});
let display = document.getElementById('display-box');
let buttons = document.querySelectorAll('.btn'); // Correct the selector

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    throw new Error('Invalid Input');
                }
                display.value = string;
            } catch (error) {
                display.value = 'Syntax Error';
                string = '';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (e.target.innerHTML === '%') {
            string = (eval(string) / 100).toString();
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
});

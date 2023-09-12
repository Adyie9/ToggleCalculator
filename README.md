# ToggleCalculator
HTML CODE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToggleCalculator</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
</head>
<body>
    <div class="container">
      <div class="calcDark">
            <button type="toggActive">
                <i class="fa-solid fa-moon" id="toggleDark"></i>
            </button>
            <input type="text" id="display-box">
        </div>

        <div class="btn">
            <button type="button" id="operator">AC</button>
            <button type="button" id="operator">%</button>
            <button type="button" id="operator">DEL</button>
            <button type="button" id="operator">/</button>
        </div>
        <div class="btn">
            <button type="button">9</button>
            <button data-value="8">8</button>
            <button data-value="7">7</button>
            <button data-value="*" id="operator">*</button>
        </div>
        <div class="btn">
            <button data-value="4">4</button>
            <button data-value="5">5</button>
            <button data-value="6">6</button>
            <button data-value="-" id="operator">-</button>
        </div>
        <div class="btn">
            <button data-value="3">3</button>
            <button data-value="2">2</button>
            <button data-value="1">1</button>
            <button data-value="+"id="operator">+</button>
        </div>
        <div class="btn">
            <button data-value="00">00</button>
            <button data-value="0">0</button>
            <button data-value=".">.</button>
            <button data-value="="id="operator">=</button>
        </div>
        </div>
    <script src="index.js"></script>
</body>
</html>


CSS CODE

body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
}
.container{
    position: relative;
    max-width: 300px;
    width: 100%;
    padding: 20px 20px 20px;
    border-radius: 10px;
    border: color(0,0,0,0.5);
    border-radius: solid;
    background-color:black;
}


.container .btn button {
    font-size: 18px;
    height: 50px;
    width: 50px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.3);
    margin-left: 18px;
    margin-bottom: 3px;
}

.container .calcDark {
   
    margin-bottom: 70px;
    height: 20px;
}

.container input {
    width: 100%; 
    height: 40px; 
    font-size: 16px; 
}

.container .btn #operator{
    color:darkcyan;
}



/* Media queries for mobile responsiveness */
@media screen and (max-width: 767px) {
    .container {
        padding: 10px;
    }

    .btn {
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }

    .btn button {
        font-size: 18px;
        padding: 10px; /* Adjust padding as needed */
    }
}


JAVASCRIPT CODE

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

let display=document.getElementById('display-box');
let buttons=document.querySelectorAll('btn');

let string="";

let arr = document.querySelectorAll('button');
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string= eval(string);
            display.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            display.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if(e.target.innerHTML=="%"){
            string = (eval(string) / 100).toString();
            display.value = string;
        }
        else {
            string += e.target.innerHTML;
            display.value=string;
        }
    })
});

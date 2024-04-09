let expression = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            expression = eval(expression);
            document.querySelector('.input').value = expression;
        }

        else if (e.target.innerHTML == 'C') {
            expression = "";
            document.querySelector('.input').value = expression;
        }

        else if (e.target.innerHTML == 'CE') {
            expression = "0";
            document.querySelector('.input').value = expression;
        }
        else {
            expression += e.target.innerHTML;
            document.querySelector('.input').value = expression;
        }
    })
})

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let evaluated = false;
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
            evaluated = true;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
            evaluated = false;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
            evaluated = false;
        } else {
            if (!evaluated || isOperator(e.target.innerHTML)) {
                string += e.target.innerHTML;
                input.value = string;
                evaluated = false;
            }
        }
    });
});

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

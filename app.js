let buttons = document.querySelector('.calculator-buttons').children

let displayInput = document.querySelector(".result")

let symbolSigns = ['+', '-', '÷', '%', '=', 'X', 'C' ]

let firstValue = ''
let secondValue = ''
let symbolVal = ''

let calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(firstValue)
}


// function buttonClick(e) {
//     console.log(e.target.value); 
//     document.querySelector(".result").innerText = e.target.value;
// }


for(let i = 0; i<=buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        const {innerText: btnValue} = buttons[i]
        
        let btnValueSymbol = symbolSigns.includes(btnValue)
        
        if(firstValue && btnValueSymbol){
            symbolVal = btnValue
        }

        displayInput.innerText += btnValue;

    });
}

// for(let button of buttons){

//     button.addEventListener("click", e => {
//         displayInput.innerText += button.innerText ;
//         const {innerText: btnValue} = button
//     });
// }



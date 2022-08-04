const result = document.getElementById('resultado');

let buttonsCalculadora = Array.from(document.getElementsByClassName('calcButton'));
console.log(buttonsCalculadora);

buttonsCalculadora.map(button =>{
    button.addEventListener('click', (evt) =>{
        switch(evt.target.innerText){
            case 'C':
                result.innerText = '';
                break;
            case '<':
                result.innerText = result.innerText.slice(0, -1);
                break;
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                }catch{
                    result.innerText = 'Expressão inválida!';
                }
                break;
            default:
                result.innerText += evt.target.innerText;
        }
    })
})
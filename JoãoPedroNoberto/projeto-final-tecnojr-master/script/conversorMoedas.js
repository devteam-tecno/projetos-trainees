const url = 'https://economia.awesomeapi.com.br/last/'
const coinsCode = 'USD-BRL,EUR-BRL,BTC-BRL'
const valueToConvert = document.getElementById('insertValue')
const botao = document.getElementById('convertCoins')
const simbolo = document.getElementById('cifrao')

fetch(url + coinsCode)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const dolReal = data.USDBRL
        const eurReal = data.EURBRL
        const btcReal = data.BTCBRL
        botao.addEventListener("click", (evt)=>{
            const coinToConvert = document.getElementsByClassName("selected").item(0).innerHTML //pegando o item selecionado do dropdown (HTMLCollection)

            if(coinToConvert == "Dólar"){
                simbolo.innerHTML = "$"
                const resultConvertion = valueToConvert.value*dolReal.low
                document.getElementById('result').innerHTML = parseFloat(resultConvertion).toLocaleString('pt-br',{
                    style: 'currency',
                    currency: 'BRL'
                })
            }

            if(coinToConvert == "Euro"){
                simbolo.innerHTML = "€"
                const resultConvertion = valueToConvert.value*eurReal.low
                document.getElementById('result').innerHTML = parseFloat(resultConvertion).toLocaleString('pt-br',{
                    style: 'currency',
                    currency: 'BRL'
                })
            }

            if(coinToConvert == "Bitcoin"){
                simbolo.innerHTML = "BTC"
                const resultConvertion = valueToConvert.value*btcReal.high
                document.getElementById('result').innerHTML = "R$ " + resultConvertion/*parseFloat(resultConvertion).toLocaleString('pt-br',{
                    style: 'currency',
                    currency: 'BRL'
                })*/
            }
        })
    })
let primeiraPesq = true

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.querySelector('.quadroPesq2').style.display = "block"
        document.querySelector('#quadroPesq').style.display = "none"
        document.querySelector('#quadroDestaques').style.display = "none"
        document.querySelector('#quadroImg').style.display = "none"

        function fazGet(url) {    // função que conecta com a API e retorna os dados referentes ao que o usuário digitou
            let request = new XMLHttpRequest()
            request.open("GET", url, false)
            request.send()
            return request.responseText
        }

        function main() {   // configura a conexão com a API e implementa as imagens da pesquisa no HTML
            if (primeiraPesq) pesq = document.querySelector('#pesq1').value
            else {
                resultPesq = document.querySelector('#resultPesq')
                resultPesq.innerHTML = ""
                pesq = document.querySelector('.pesq2').value
            }

            primeiraPesq = false
            let API_KEY = '28956871-8ea1618e9953c308ba075e288'
            let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(pesq)
            let data = fazGet(URL)
            let result = JSON.parse(data)
            
            result.hits.forEach(element => {
                img = document.createElement('img')
                img.src = element.webformatURL
                img.style.width = "400px"
                img.style.marginRight ="5px" 

                document.querySelector('#resultPesq').appendChild(img)
            });
        }

        main()
    }
})
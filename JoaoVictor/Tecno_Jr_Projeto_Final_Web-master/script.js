//varáveis e constantes para a função pokeRandom
const botaoStart = document.querySelector("#startQuiz")
const botaoCmp = document.querySelector("#confirmQuiz")
const userAnswer = document.querySelector("#userInput") //armazena a resposta do usuário
var pokeComp

/*A partir da escolha do usuário no select, um valor será recebido para a função. 
Nela, há um switch case referente as gerações que retorna um valor aleatorio atraves 
da funcao Math.random dentro dos id dos pokemons referentes ao escopo escolhido 
(a partir da primeira geração até a escolhida)*/
function switchGen(gen){
    gen = Number(gen); //transforma a string gen em número
    switch(gen){
        case 1:
            return Math.floor(Math.random() * 151 + 1);

        case 2:
            return Math.floor(Math.random() * 251 + 1);

        case 3:
            return Math.floor(Math.random() * 386 + 1);

        case 4:
            return Math.floor(Math.random() * 493 + 1);

        case 5:
            return Math.floor(Math.random() * 649 + 1);

        case 6:
            return Math.floor(Math.random() * 719 + 1);

        case 7:
            return Math.floor(Math.random() * 785 + 1);

        case 8:
            return Math.floor(Math.random() * 898 + 1);

        case 9:
            return Math.floor(Math.random() * 905 + 1);
        
        default:
            console.log("Deafult");
            return 1;
    }
}

/*Função que é acionada através do botão botaoStart, onde chama a função 
switchGen no qual armazena um numero para ser anexado a url da API, 
gerando os dados de um pokemon da pokedex. Então sua imagem (sprite) 
é revelada ao usuário sem brilho e é esperado sua interação no input 
text para o segmento do programa. Há também um tratamento para toda 
vez que esta função seja chamada, seja limpo o campo do input anterior.*/
function pokeRandom(){
    var select = document.getElementById('genSelect');
    var gen = select.options[select.selectedIndex].value;
    var pokeId = switchGen(gen); //variavel que receberá um id aleatório dentro do escopo selecionado
    let url = 'https://pokeapi.co/api/v2/pokemon/'+pokeId;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        userAnswer.value = "";
        pokeComp = data['name']; //variavel que armazena o nome do pokemon
        let img = data['sprites']['front_default'];
        document.getElementById("pokeImg").classList.remove("brightNormal"); //remove o brightness normal do sprite
        document.getElementById("pokeImg").setAttribute('src', img);
        document.getElementById("numero").innerHTML = data['id'];

    })
    .catch((erro) => {
        console.log("Erro: "+ erro);
    });
}

/*Função que é chamada através do botão botaoCmp, recebe a resposta do 
usuário através do input text e esta é comparada com o nome do pokemon, 
emitindo uma mensagem de alerta caso o usuário tenha acertado ou não. 
Após a resposta, a imagem do pokemon é revelada e ampliada ao usuário, 
então ele pode assim repetir o processo mudando ou nao a opção do select.*/
function compara(){
    let img = document.getElementById('pokeImg');
    if(userAnswer.value == pokeComp){
        alert(`Parabéns`);
    }else{
        alert(`Mais sorte na próxima`);
    }
    img.classList.toggle('brightNormal');

}

botaoStart.addEventListener("click", pokeRandom);
botaoCmp.addEventListener("click", compara);
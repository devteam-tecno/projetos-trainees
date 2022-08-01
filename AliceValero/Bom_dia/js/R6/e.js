let cont = 0 
var true_prep = localStorage.getItem("Num")

const dialogos= ["Oi Lisa. Bora nessa?",
"Ela olha para mim e abre um espaço na mesa",
"Se quiser pode começar dando uma olhada nos meus resumos",
"Nossa eu amo os seus resumos",
"Como você faz isso?",
"Quer que eu te ensine?",
"Claro que sim",
"Ela me ensina tudo que sabe e, apesar de eu só conseguir fazer umas coisas bem medíocres, ela não me deixou desistir",
"Ok, ok, vamos para a matemática. Esse assunto eu posso te ensinar",
"Você sempre se gaba disso",
"É a única matéria em que eu tiro nota maior que você ok?",
"Ela puxa uma lista de exercícios e eu começo a fazer eles com ela. Mas mesmo assim ela parecia ter dificuldade",
"Ok Lisa hora das medidas desesperadas. Passa o celular, vou te ensinar usando seus joguinhos de gacha",
"Ela resmunga um pouco mas me entrega o celular",
"Eu explico de novo e dessa vez ela parece entender o assunto (além de conseguir uma SSR nova).",
"Passamos o dia assim.",
"Quando eu me levanto sinto minhas pernas meio dormentes depois de tanto tempo sentada",
"Quando eu começo a sair eu tropeço e começo a cair. Eu fecho os meus olhos com força e me preparo para a queda",
"Antes de bater no chão eu sinto um braço segurando a minha cintura",
"Eu abro os olhos e vejo a Elisa me segurando",
"Apesar de ser mais baixa que eu, ela sempre foi bem mais forte do que parecia",
"Depois de um tempo ela me levanta e eu sinto meu rosto ficando vermelho. Ai que vergonha!",
"Que bom que ela me segurou. Se não eu nem consigo imaginar o mico que seria dar de cara com o chão no meio da biblioteca cheia",
"S/N",
"Eu viro para Lisa e ela parece estranhamente sem jeito",
"Eu gostaria de conversar contigo antes de sairmos. Poderia me esperar no Jardim? Eu só tenho que resolver algumas coisas no Conselho estudantil e vou te ver.",
"Claro! Te vejo lá.",
"Eu caminho até o jardim pensando no dia com a Elisa",
"Mesmo estudando o dia inteiro era divertido quando eu estou com ela",
"Depois de alguns minutos de espera eu vejo a Elisa chegando e sorrio",
"Oi Lisa. Queria falar o que?",
"Ela senta com uma expressão séria e um pouco nervosa",
"S/N, sabe eu sempre gostei muito de você. Você é minha melhor amiga faz muito tempo e meus momentos mais felizes sempre foram ao seu lado",
"Mas ao longo dos anos esse sentimento cresceu, até que um dia eu acordei e vi que te amava",
"Esses dias com você fizeram com que eu sentisse esse sentimento crescer tanto que parecia que ele ia transbordar do meu peito",
"Então eu queria que você soubesse. Eu vou te dar o que vocẽ quiser, mesmo que vocề só queira minha amizade, mesmo que queira que eu saia da sua vida",
"O que você quer S/N?",
" "]

const names = ["Elisa","S/N"," "]

function passar_dia() {
    if(cont == 10){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/corredor.jpg"
    }
    if(cont == dialogos.length){
        element.setAttribute("hidden","hidden")
    }
    muda_nome()
    muda_personagem()
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;

    mostrar_escolha()
}

const e  = document.getElementById("escolha")

function mostrar_escolha(){
   
    if(cont == dialogos.length){
       
        e.setAttribute("style", "display: blcok;")
        return
    } else if (e.style = "display: block;"){
     
        e.setAttribute("style", "display: none;")
    }
}

function escolha_1(){
    set_checkpoint("../R8/nv2.html")
    window.location = "../R8/nv2.html"
}

function escolha_2(){
    if(true_prep == 2){
        escolha.classList.remove("escondido")
        set_checkpoint("../R8/a.html")
        window.location = "../R8/a.html"
    }
}

function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 2 || cont == 5 || cont == 9 || cont == 23 || cont == 25 || cont == 32 ){
        container.innerText = names[0]
    }
    if(cont == 0 || cont == 3 || cont == 6 || cont == 8 || cont == 10 || cont == 12 || cont == 26 || cont == 30){
        container.innerText = names[1]
    }
    if(cont == 1 || cont == 7 || cont == 11 || cont == 13 || cont == 24 || cont == 27 || cont == 31 ){
        container.innerText = names[2]
    }
}

function muda_personagem () {
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 2 || cont == 5 || cont == 9 || cont == 23 || cont == 25 || cont == 32 ){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/presidenta.png"
    }    
    if (cont == 1 || cont == 7 || cont == 11 || cont == 13 || cont == 24 || cont == 27 || cont == 31 || cont == 0 || cont == 3 || cont == 6 || cont == 8 || cont == 10 || cont == 12 || cont == 26 || cont == 30) {
        personagem_img.classList.add("escondido")
    }
    
}
let cont = 0 
var true_bad = 0
var true_prep = 0

localStorage.setItem("num", true_bad);
localStorage.setItem("Num", true_prep);

const dialogos = ["Desligo o meu alarme e me arrastei da cama.",
"Eu me arrumo na frente do espelho e coloco meu cabelo em um coque bagunçado",
"Eu arrumo a mochila e olhou para o relógio em cima da mesa",
"Toda pronta em 15 minutos! Só falta o café da manhã e vou estar pronta para sair.",
"É incrível quanto tempo você economiza de manhã quando não usa maquiagem ",
"Quando eu vejo que está tudo certo, vou para a sala.",
"Eu vejo a minha mãe relendo um dos seus cadernos no caminho da cozinha",
"Bom dia, mãe!",
"Ela levanta a cabeça e sorri ao me ver",
"Bom dia, filha! Animada para o seu primeiro dia de aula na escola nova?",
"Animada pra que? Eu vou ter só três dias de aula antes do ano acabar",
"Para com isso filha. Você está indo para a escola Amoris! É a primeira da família a pisar nessa escola",
"Mentira. A tia Jessica tava lá antes de eu nascer",
"É diferente e você sabe. Ela trabalhava lá como faxineira, mas você vai para estudar",
"Você devia tá agradecendo os céus por conseguir uma bolsa maravilhosa dessas a tempo pro ENEM",
"Eu não teria esse problema se não fosse aquela maldita greve",
"Bom aí vou ter que concordar. Que hora ruim pra fazer greve hein?",
"Eu concordo com a cabeça e pego uma maçã para comer no caminho do ponto",
"Só aí que eu percebo que não tinha visto o meu pai até agora",
"Estranho. Ele deve ter passado a noite na oficina dele",
"Eu deveria ver ele antes de sair. As costas dele vão piorar se ele passar mais uma noite dormindo na mesa",
"Mas... A escola é bem longe. Se eu não sair logo vou acabar me atrasando",
" "]

const names = ["Mãe","S/N"," "]

function passar_dia() {
    if(cont == 6){
        let bg = document.querySelector("#background img")
        bg.src = "../assets/img/sala.jpg"
    }
    if(cont == dialogos.length){
        element.setAttribute("hidden", "hidden");
    }
    
    muda_nome ()
    muda_personagem()
    
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    mostrar_escolha()
}

const e  = document.getElementById("escolha")

function mostrar_escolha(){
    if(cont == dialogos.length){
        e.setAttribute("style", "display: flex;")
        return
    } else if (e.style = "display: flex;"){
        e.setAttribute("style", "display: none;")
    }
}

function escolha_1(){
    set_checkpoint("R1/vam.html")
    window.location = "R1/vam.html"
}

function escolha_2(){
    set_checkpoint("R1/vop.html")
    window.location = "R1/vop.html"

}

function muda_nome(){
    
    let container = document.querySelector ("#nome p")

    if(cont == 9 || cont == 11 || cont == 13 || cont == 16){
        container.innerText = names [0] 
    }
    if(cont == 7 || cont == 10 || cont == 12 || cont ==15){
        container.innerText = names [1] 
    }
    if(cont == 8 || cont == 17){
        container.innerText = names [2] 
    }
    
}

function muda_personagem() {
    let personagem_img = document.querySelector ("#personagem_img")
    let img = document.querySelector ("#personagem_img img")
    

    if(cont == 9 || cont == 11 || cont == 13 || cont == 14 || cont == 16){
        personagem_img.classList.remove("escondido")
        img.src = "../assets/pers/mãe_SN.png"
    }
    else{
        personagem_img.classList.add("escondido")
    }
}

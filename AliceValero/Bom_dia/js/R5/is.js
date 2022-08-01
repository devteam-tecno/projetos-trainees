let cont = 0 

const dialogos= ["Bom se você prefere assim então tudo bem",
"Te vejo amanhã S/N",
"Até Lisa",
"Eu saio da escola e subo no ônibus",
"Que escola estranha",
"Podia ser pior, mas pelo amor de deus podia ser muito melhor",
"Eu desço no meu ponto e vejo a padaria do bairro",
"Sabe tá bem na hora de sair pão fresco",
"Conhecendo o meu pai, a chance de ele ter feito algo para a gente comer é 50/50",
"Eu entro e vou direto para o fim da fila do pão",
"É quase a minha vez quando eu sinto alguém dar um tapa na minha bunda",
"Ow que desgraça é essa vagabundo?",
"Eu viro e vejo"]

const names = ["Elisa", "S/N", " "]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("final_3.html")
        window.location = "final_3.html"
    }
    muda_nome()
    muda_personagem()
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    console.log (dialogos [cont])

}

function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 0){
        container.innerText = names [0]
    }
    if(cont == 2 || cont == 11){
        container.innerText = names [1]
    }
    if(cont == 3 || cont == 12){
        container.innerText = names [2]
    }
}

function muda_personagem(){
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 0 || cont == 1){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/presidenta.png"
    }
    else{
        personagem_img.classList.add("escondido")
    }
}
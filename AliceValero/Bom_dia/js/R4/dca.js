let cont = 0 

const dialogos= ["Eu sinto uma mão no meu ombro e me viro para ver um trio de garotas de roupas coloridas me olhando. Uma delas parece ser a líder do grupo e me dá um sorriso",
    "Qual o seu nome?",
    "... Me chame de S/N.",
    "S/N. Por que você não para de mexer nas minhas luzes?",
    "Quem disse que eu que mexi nelas? Qualquer um pode ter feito isso",
    "Ela estica a mão e pega o meu celular. Ela é mais alta que eu e mantêm ele longe do meu alcance com facilidade",
    "Com alguns toques na tela ela liga e desliga a luz.",
    "Interessante... Como você fez isso?",
    "... Eu mexi na sua Alexa. Os interruptores são todos touch e sabe... numa casa dessas seria estranho não ter uma Alexa.",
    "Eu digo em uma voz baixa.",
    "Agora você vai devolver o meu celular?",
    "Talvez... Se você botar uma música melhor na caixa de som.",
    "Eu coloco uma playlist de melhores do verão assim que ela me devolve o celular e ela me dá um sorriso carinhoso",
    "Perfeito. Sabe, você parece ser uma pessoa superinteressante. Como eu ainda não te conheci?",
    "Eu entrei na escola hoje",
    "Hoje! Só poderia ser isso! Nós super devemos virar melhores amigas!",
    "Meu nome é Regina George. Essa a minha direita é a Heather Duke e a minha esquerda é a Dionne Davenport.",
    "Por que você não vem dançar com a gente? Quem sabe... Você pode acabar entrando no grupo mais exclusivo e poderoso dessa escola",
    "Como assim?",
    "Você pode virar alguém melhor. Uma pessoa forte.",
    "Admirada",
    "Temida",
    "Você pode virar um Princesa"]

const names = ["???", "Regina George", "S/N", " "]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("final_2.html")
        window.location = "final_2.html"
    }
    muda_nome()
    muda_personagem ()
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    

}
function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 1 || cont == 3 || cont == 7 || cont == 11 || cont == 13 || cont == 15){
        container.innerText = names [0]
    }
    if(cont == 16 || cont == 19){
        container.innerText = names[1]
    }
    if(cont == 2 ||cont == 4 ||cont == 8 || cont == 10 || cont == 14 || cont == 18){
        container.innerText = names [2]
    }
    if(cont == 5 || cont == 9 || cont == 12){
        container.innerText = names[3]
    }
}   
function muda_personagem(){
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 1 || cont == 3 || cont == 7 || cont == 11 || cont == 13 || cont == 15 || cont == 16 || cont == 17 || cont == 19 || cont == 20 || cont == 21 || cont == 22){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/meninas_malvadas.png"
    }
    else {
        personagem_img.classList.add("escondido")
    }
    
}
let cont = 0 
var true_bad = localStorage.getItem("num")


const dialogos= ["Eu caminho até a biblioteca e acho o Henri sentado em uma mesa meio escondida",
"Eu vejo le mexendo no computador e sento para ver que ele parece estar escrevendo alguma coisa",
"Tá fazendo o quê?",
"Editando um rótulo de garrafa de água. Eu coloco parte do assunto nela e leio durante a prova",
"Também vou levar anotações escondidas em outros lugares",
"Bom, eu posso ajudar nisso. Me fala os assuntos que eu faço um resuminho",
"Ele me passa uma lista e eu começo a trabalhar.",
"Depois de uma hora escrevendo eu olho para o lado onde ele colocou um caderno aberto",
"Várias anotações de química acompanhadas de historinhas e resumos para ajudar a lembrar",
"Todos relacionados a... comida?",
"O comportamento de misturas é comparado a água de macarrão com sal",
"Uma receita está escrita no canto da página falando de um técnica de esferificação, seja lá o que isso queira dizer",
"Você gosta de cozinhar é?",
"Ele olha para mim e parece notar que eu li o caderno dele",
"Ele corre para esconder o caderno",
"Não é bom ler as coisas dos outros",
"E nem colar mas isso não nos impediu né?",
"Vamos nessa cara não tem por que ter vergonha disso.",
"Ele relaxa devagar e se afasta do caderno",
"...Acho melhor você fazer as suas anotações de química.",
"Deve ser mais fácil pra você né? Química tem muito a ver com culinária",
"Ele concorda com a cabeça",
"Posso ver o seu caderno?",
"Ele hesita mas passa o caderno para mim",
"Eu vejo páginas e mais páginas falando de métodos culinários, receitas, comentários sobre comidas que o Henri comeu",
"No começo essas anotações eram disfarçadas entre o conteúdo da matéria mas depois de um tempo ele passa a escrever páginas inteiras sobre comida",
"Nossa, isso é muito legal. Você quer fazer gastronomia ou algo assim?",
"Eu não posso",
"Como assim?",
"...Minha família é dona das empresas Lovestorm então eu tenho que estudar para herdar os negócios da família",
"Bom então sempre pode ser um hobby ou algo assim né?",
"Ele concorda mas dá para ver que a ideia deixa ele muito triste",
"Quem sabe né? Pode ser que você consiga fazer as duas faculdades ao mesmo tempo ou algo assim.",
"Ou então um curso profissionalizante. Vai ser legal aprender mais sobre o que você gosta",
"Ele me dá um sorriso e voltamos a estudar",
"Depois de passar o dia inteiro arrumando cola e escondendo em canetas, garrafas, estojos e até mesmo na barra da minha saia",
"Eu levantei mas depois de tanto tempo sentada minhas pernas tinham adormecido e eu tropecei pouco depois de levantar, eu fecho os olhos e me preparo para o impacto",
"Mas quando estava prestes a cair no chão uma mão me segurou pela cintura",
"Eu abro os olhos e vejo o rosto do Henri perto do meu e congelo",
"Ficamos assim por alguns segundos que pareciam horas",
"Ele me ajudou a ficar de pé e nos afastamos meio sem jeito",
"Eu arrumo as minhas coisas sem olhar para ele. Ai que vergonha!",
"Que bom que ele tava lá para me segurar, se não eu nem consigo imaginar o mico que seria dar de cara no chão da biblioteca lotada",
"Eu olho para ele pelo canto do olho e vejo ele olhando para mim",
"Quando ele percebi que eu notei ele me olhando Henri olhou para o lado e continuou a guardar os seus cadernos",
"Quando eu termino de me arrumar escuto o Henri me chamando",
"S/n. Eu tenho que ir na sala para esconder algumas coisas na minha mesa",
"Mas pode me encontrar no jardim? Eu vou para lá assim que eu arrumar as minhas coisas",
"Por quê?",
"Você vai ver",
"Ele diz antes de sair da sala com pressa",
"Estranho. Mas estou curiosa demais para não ir",
"Eu caminho para o jardim pensando no tempo que passamos juntos",
"Foi bem divertido. Misterioso, sério, mal educado mas estranhamente eu não tenho o menor interesse em me afastar dele.",
"Eu sento no jardim e espero por ele",
"Pouco tempo depois eu vejo o Henri chegando. Debaixo do sol do fim da tarde, ele estava mais lindo do que eu lembrava",
"Eu sorrio quando ele chega e vou para o lado para ter espaço para ele no banco",
"Então o que você queria me contar?",
"S/N, Desde que eu te vi pela primeira vez eu soube que vocẽ era diferente. Tinha algo que me disse que você não era como as outras garotas",
"Você não era como as Princesas que só pensam em poder, nem era esnobe como as outras alunas. Você era só alguém que queria se divertir.",
"E ontem a noite... Bom você foi a primeira pessoa a brigar comigo daquele jeito.",
"Ninguém nunca ousou tentar fazer o que você fez ontem.",
"Você faz com que eu seja uma pessoa melhor, faz com que eu não queira fazer o que eu fiz ontem de novo",
"Então eu quero saber uma coisa",
"S/N, quer ser a minha namorada?",
" "]

const names = ["Henri", "S/N", " "]

function passar_dia() {
    if(cont == 0){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/biblioteca.jpg"
    }
    if(cont == 54){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/jardim.jpg"
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
    set_checkpoint("../R7/pce.html")
    window.location = "../R7/pce.html"
}

function escolha_2(){
    let escolha = document.querySelector("#es_2")
    
    if(true_bad == 2){
        escolha.classList.remove("escondido")
        set_checkpoint("../R7/nv.html")
        window.location = "../R7/nv.html"
    }

}

function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 3 || cont == 15 || cont == 19 || cont == 27 || cont == 29 || cont == 46 || cont == 49 || cont == 58 || cont == 63 ){
        container.innerText = names[0]
    }
    if(cont == 2 || cont == 5 || cont == 12 || cont == 16 || cont == 20 || cont == 22 || cont == 26 || cont == 28 || cont == 30 || cont == 32 || cont == 48 || cont == 57 || cont == 62){
        container.innerText = names[1]
    }
    if(cont == 6 || cont == 13 || cont == 18 || cont == 21 || cont == 23 || cont == 31 || cont == 34 || cont == 50){
        container.innerText = names[2]
    }
}

function muda_personagem () {
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 3 || cont == 15 || cont == 19 || cont == 27 || cont == 29 || cont == 46 || cont == 49 || cont == 58 || cont == 63 ){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/Bad_Boy.png"
    }    
    if (cont == 6 || cont == 13 || cont == 18 || cont == 21 || cont == 23 || cont == 31 || cont == 34 || cont == 50 || cont == 2 || cont == 5 || cont == 12 || cont == 16 || cont == 20 || cont == 22 || cont == 26 || cont == 28 || cont == 30 || cont == 32 || cont == 48 || cont == 57 || cont == 62) {
        personagem_img.classList.add("escondido")
    }
    
}
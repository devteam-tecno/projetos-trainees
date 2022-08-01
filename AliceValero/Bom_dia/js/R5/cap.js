let cont = 0 
var true_prep = localStorage.getItem("Num")

const dialogos= ["Ela sorri e segura a minha mão",
"Então vamos ao ponto de ônibus. Eu passo na minha casa rapidinho e depois iremos para a sua",
"Saímos da escola e chegamos bem a tempo de sentar no ônibus",
"Eu vejo ela puxando o celular e dou um sorriso",
"Lisa você ainda tá viciada em gacha?",
"Vício é uma palavra muito forte",
"Lisa fala sério. Você me chamava para ir na sua casa farmar pra você linda",
"Você me deixava uma lista de coisas para fazer enquanto você estudava",
"Não minta S/N",
"Ué? Então pegou esse celular pra quê?",
"Eu quero ouvir música.",
"Com que fone? Você odeia usar fone no ônibus!",
"Eu - Eu mudei! Faz muito tempo que não andamos de ônibus juntas",
"Eu me estico e arranco o celular das mãos dela",
"Devolve!",
"Olha que lindo! Plano de fundo de genshin, pasta de jogos com não um, não dois mais três jogos que são claramente gachas!",
"Quem disse! Aquele é sobre teatro! E esse é de moda! E esse aqui é um dating sim!",
"Querida esses são gachas sim. Se eu abrir e não for eu te pago um lanche",
"... Precisa não",
"Ha! Não tem para onde fugir né?",
"Olha faz assim, eu paro de te zoar por enquanto e você lê um mangá que eu escolher",
"Vai ser Iruma-kun né?",
"Sim",
"...Ta",
"Descemos no ponto dela e eu espero ela descer com as coisas dela e vamos para a minha casa",
"Então, como vai a busca por aquele amigo dos seus pais?",
"O Eduardo? Tem ido como sempre foi sabe",
"Meu pai inventando coisa, minha mãe trabalhando que nem uma louca e nem sinal dele",
"S/N me diga, como era para o espelho-inator ajudar?Eu compreendo que o Rastreador Universal-inator seria muito útil mas um espelho? ",
"Bom o espelho só reflete vampiros. Se ele refletir alguém vamos receber um sinal aqui junto com um vídeo do vampiro. Mas o lance é que ninguém quer comprar um espelho que não reflete",
"Mas meu pai não me escuta né. Eu falo que se a gente vendesse um espelho que mostra vampiros para garotas adolescentes, ia ser sucesso na certa",
"Bom, ele nunca teve muito talento na área de marketing. Mas eu sei que você faria um ótimo trabalho",
"Seguimos o caminho colocando o assunto e dia",
"Ela me conta as histórias conselho estudantil e eu conto os dramas da minha escola antiga",
"Quando chegamos na minha casa já está escuro",
"Família! Cheguei!",
"Oi filha",
"Fala a minha mãe",
"A e olha quem veio!",
"Ela sorri quando vê a Elisa",
"A oi Lisa! Nossa faz muito tempo que você vem aqui.",
"É bom te ver também tia Bela",
"Eu vejo meu pai no sofá e vou lá dar um beijo nele",
"Oi pai!",
"Oi filha, nossa, saiu e nem me deu tchau?",
"Você estava enfurnado naquele laboratório. E também, se eu demorasse mais eu ia me atrasar",
"Bom no fim foi para a melhor mesmo",
"Boa noite tio Jonas.",
"Noite Lisa! Bom te ver.",
"O jantar já vai sair viu?",
"Você vai fazer o quê de jantar pai?",
"Nada. Hoje vamos pedir pizza",
"Eu riu um pouco e vou com a Lisa para o meu quarto",
"Quando a gente entra a Elisa vai direto para a minha mesa tirando os livros e cadernos da mochila",
"Vai estudar Lisa?",
"Claro. Mas se quiser me ajudar...",
"Já sei passa o celular",
"Brigada! Lembra que só pode dar pull se eu deixar viu?",
"Claro, claro. Pelo menos as história são legais",
"Eu fico na minha cama farmando enquanto ela estuda, quando a comida chega eu vejo pelo menos três resumos prontos",
"Claro que todos parecem ter saído direto do pinterest",
"Passamos a noite assim. Quando chega a hora de dormir dividimos a cama ",
"Boa noite, Lisa.Te vejo amanhã.",
"A Elisa segura a minha mão e sorri",
"Boa noite S/N",
"Acordo do lado dela e nos arrumamos juntas para a escola",
"Eu tinha esquecido quão fácil era estar com ela. Parece certo. Ter ela do meu lado.",
"Mesmo que cada uma esteja fazendo a sua coisa, ainda me sinto feliz só por que ela está lá",
"Quando chegamos na escola eu vejo que todos os alunos parecem meio agitados",
"Grupinhos andam carregando livros e resumos",
"Lisa o quê que tá acontecendo?",
"A sim. Hoje é o último dia antes das provas. A escola tem uma tradição de deixar o último dia sem nenhuma aula para os alunos exercitarem responsabilidade e disciplina",
"E por que tem tanta gente aqui?",
"Faltar nesse dia tira um ponto da média do aluno. ",
"... Que escola é essa?",
"Vai ser prova de quê?",
"Tudo",
"Bosta. Acho que não vou pro ENEM esse ano.",
"Não se preocupe S/N. Eu posso te ajudar. Eu já vou indo para a biblioteca, mas se quiser eu vou está lá para te ajudar",
"Eu vejo ela ir enquanto surto de leve sobre o tanto de coisa que eu vou ter que estudar",
"Se os jogos de STOP dessa escola já estranhos, eu nem quero imaginar como as provas vão ser",
"Eu escuto a porta abrindo atrás de mim e viro para ver um garoto ruivo entrando",
"Eu lembro da Elisa me falando sobre ele, Henri eu acho",
"Nem sei como ele está aqui a tanto tempo. Aparentemente, ele só aparece o bastante para não ser reprovado por falta, nunca foi visto com um livro e mesmo assim passa com notas decentes",
"Oi! Você é o Henri, né? Eu soube que você tem um jeito de estudar que faz com que você passe sem muito esforço",
"Poderia me dizer qual é?",
"Sim",
"...",
"E esse jeito é...?",
"Eu colo",
"Eu vejo ele indo para a biblioteca em choque",
"Bom... É um jeito.",
"E agora?",
" "]

const names = ["Elisa", "S/N", "Mãe", "Pai","Henri"," "]

function passar_dia() {
    if(cont == 2){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/rua_dia.jpg"
    }
    if(cont == 35){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/sala.jpg"
    }
    if(cont == 52){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/quarto_S-N.jpg"
    }
    if(cont == 68){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/corredor.jpg"
    }
    if(cont == dialogos.length){
        element.setAttribute("hidden","hidden")
        true_prep++
        localStorage.setItem("Num", true_prep);
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
    set_checkpoint("../R6/c.html")
    window.location = "../R6/c.html"
}

function escolha_2(){
    set_checkpoint("../R6/e.html")
    window.location = "../R6/e.html"

}
function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 1 || cont == 5 || cont == 8 || cont == 10 || cont == 12 || cont == 14 || cont == 16 || cont == 18 || cont == 21 || cont == 23 || cont == 25 || cont == 28 || cont == 31 || cont == 41 || cont == 47 || cont == 55 || cont == 57 || cont == 64 || cont == 71 || cont == 73 || cont == 76 || cont == 78){
        container.innerText = names [0]
    }
    if(cont == 4 || cont == 6 || cont == 9 || cont == 11 ||cont == 15 || cont == 17 || cont == 19 || cont == 22 || cont == 26 || cont == 29 || cont == 35 || cont == 43 || cont == 45 || cont == 54 || cont == 56 || cont == 58 || cont == 62 || cont == 70 || cont == 72 || cont == 75 || cont == 77 || cont == 84 || cont == 87){
        container.innerText = names[1]
    }
    if(cont == 36 || cont == 38 || cont == 40){
        container.innerText = names [2]
    }
    if(cont == 44 || cont == 46 || cont == 48 || cont == 51){
        container.innerText = names [3]
    }
    if(cont == 86 || cont == 89){
        container.innerText = names [4]
    }
    if(cont == 0 || cont == 2 || cont == 13 || cont == 24 || cont == 32 || cont == 37 || cont == 39 || cont == 42 || cont == 52 || cont == 59 || cont == 63 || cont == 65 || cont == 74 || cont == 79 || cont == 90){
        container.innerText = names [5]
    }
}

function muda_personagem(){
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")
    
    
    if(cont == 1 || cont == 5 || cont == 8 || cont == 10 || cont == 12 || cont == 14 || cont == 16 || cont == 18 || cont == 21 || cont == 23 || cont == 25 || cont == 28 || cont == 31 || cont == 41 || cont == 47 || cont == 55 || cont == 57 || cont == 64 || cont == 71 || cont == 73 || cont == 76 || cont == 78){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/presidenta.png"
    }
    if(cont == 36 || cont == 38 || cont == 40){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/mãe_SN.png"
    }
    if(cont == 44 || cont == 46 || cont == 48 || cont == 51){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/pai_SN.png"
    }
    if(cont == 86 || cont == 89){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/Bad_Boy.png"
    }
    if(cont == 4 || cont == 6 || cont == 9 || cont == 11 ||cont == 15 || cont == 17 || cont == 19 || cont == 22 || cont == 26 || cont == 29 || cont == 35 || cont == 43 || cont == 45 || cont == 54 || cont == 56 || cont == 58 || cont == 62 || cont == 70 || cont == 72 || cont == 75 || cont == 77 || cont == 84 || cont == 87 || cont == 2 || cont == 13 || cont == 24 || cont == 32 || cont == 37 || cont == 39 || cont == 42 || cont == 52 || cont == 59 || cont == 63 || cont == 65 || cont == 74 || cont == 79 || cont == 90) {
        personagem_img.classList.add("escondido")
    }
}
let cont = 0 


const dialogos= ["Eu viro para a minha mãe enquanto coloco o meu tênis all-star",
"Mãe manda um beijo no papai por mim tá bom?",
"Eu saio de casa e começo a minha caminhada até o ponto de ônibus",
"Eu podia não ter muitos amigos na minha escola antiga mas ainda era melhor do que me mudar para um lugar onde eu não conheço ninguém",
"Bom... Quase ninguém",
"Elisa Suzuki,minha melhor amiga desde o jardim de infância.",
"Ela conseguiu uma bolsa para a Amoris no início do fundamental e tem trabalhado duro para não perder a bolsa",
"Mas isso não me impediu de atazanar ela sempre que eu quisesse",
"Eu dou um sorriso lembrando as horas em que eu fiquei deitada na cama dela farmando em um jogo de celular ou outro enquanto ela estudava",
"Se bem que mesmo com tanto tempo estudando ela ainda arranjou tempo para trabalhar como presidente do conselho estudantil",
"Para ser bem honesta eu não vejo o charme da posição",
"Fui a líder da minha turma desde antes dela sair da minha escola, apesar da gente meio que dividir a posição para não ter briga",
"Mas por algum motivo a escola Amoris faz com que seus presidentes façam bem mais que anotar a agenda do dia e levar a culpa por qualquer merda que aconteça",
"Eles organizam eventos, punem os alunos que quebram as regras da escola e até propõem novas políticas escolares",
"Meio bizarro mas é bem a cara da Lisa",
"O ônibus sacode com uma freada brusca e eu vejo a escola pela janela",
"Não consigo nem olhar o prédio direito quando escuto um sinal tocando",
"Bosta! Eu corro pra dentro do prédio.",
"Que sorte. Atrasada no primeiro dia",
"Eu vejo um quadro de avisos e procuro alguma coisa útil",
"Notas, calendários e.... Achei!",
"Lá no canto eu vejo um mapa da escola. É uma escola realmente enorme, três andares no prédio principal, quadras para tudo quanto é esporte, jardins enormes e mais 5 prédios ao redor do pavilhão central",
"Depois do choque inicial eu percebo que o terceiro ano têm aulas no pavilhão central",
"O lado bom é que eu já estou no pavilhão certo",
"O lado ruim é que as informações acabam aí",
"Merda.",
"A Elisa já me disse que o conselho estudantil é por aqui. Deve ser fácil de achar, né?",
"Se bem que eu sempre posso tentar me virar sozinha. Atrasada por atrasada eu já estou e, no fim,o que é um pum, né?",
" " ]

let names = ["S/N",""]

function passar_dia() {
    if(cont == 3){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/rua_dia.jpg"
    }
    if(cont == 18){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/corredor.jpg"
    }
    if(cont == dialogos.length){
        element.setAttribute("hidden","hidden")
    }
    muda_nome()
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++
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
    set_checkpoint("../R2/sv.html")
    window.location = "../R2/sv.html"
}

function escolha_2(){
    set_checkpoint("../R2/incs.html")
    window.location = "../R2/incs.html"

}

function muda_nome(){
    let container = document.querySelector ("#nome p")

    if(cont == 1){
        container.innerText = names [0] 
    } else {
        container.innerText = names [1]
    }
}
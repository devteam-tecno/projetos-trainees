let cont = 0 


const dialogos= ["Na verdade, oficina é uma palavra meio forte",
"O espaço é uma casinha nos fundos do quintal que servia para guardar o equipamento de jardinagem na época em que a minha avó morava aqui",
"Mas desde que ela morreu o espaço virou o lugar onde meu pai cria as suas invenções",
"Quando eu estou quase na porta do quintal eu vejo meu pai no quarto dele",
"Mas algo está estranho. Ele está sentado na cama parecendo completamente arrasado",
"Pai? Tá tudo bem?",
"Ele levanta a cabeça parecendo assustado",
"Filha, você ainda está aqui? Você já devia ter ido para a escola",
"Eu só queria te ver antes de sair. Aconteceu alguma coisa?",
"O de sempre filha. O Rastreador Universal-inator não funciona e depois do desastre dos espelhos para vampiro tem sido difícil achar um comprador",
"Eu discordo, adoro usar meu espelho-inator e teve um monte de garotas que compraram",
"Obrigada filha, mas vende espelhos para garotas adolescentes não paga as contas. Se as coisas continuarem assim vou ter que tomar medidas drásticas",
"Ai pai não exagera. Se você me deixasse fazer o marketing dos nossos espelhos a gente ia ficar nadando em dinheiro",
"Tudo bem filha você pode estar me-",
"Alguém bate na porta",
"Meu pai fica branco e se levanta correndo",
"Filha você tem que correr",
"Que? Por que pai? O que está acontecendo",
"Ele me arrasta na direção do quintal",
"O que eu mais temia.",
"Pai você se envolveu com agiota?!",
"Pior filha. Eu prometi o meu primogênito anos atrás em troca de conhecimento proibido",
"Concordamos que caso eu pague uma certa quantia você vai estar livre",
"Então paga logo!",
"Eu digo, correndo tão rápido quando eu posso até o muro no fundo do quintal",
"Por que minha vó inventou de ter um terreno tão grande?",
"Filha, se eles te verem antes de eu terminar de pagar a minha dívida, nós nunca mais nos veremos. Eu preciso que você fuja ouviu?",
"Eles quem?",
"Eu sinto uma mão no meu ombro",
"Jonas, querido! Viemos buscar nosso pagamento",
"Meu pai gagueja e tenta me puxar para longe da pessoa que me agarrou mas não consegue me mover nem um centímetro",
"Não,por favor! Eu tenho dinheiro! Largue a minha filha!",
"Mas a mão me segura com mais força e eu sinto mais quatro segurando os meus braços",
"Essa voz... Eu já ouvi ela antes",
"Eu penso através do medo frio que pesa o meu estômago",
"Não se preocupe, viu? A gente aceita ela. Melhor ainda: devolvemos tudo que você pagou até agora!",
"Meu corpo congela quando eu finalmente reconheço a voz",
"Se prepare garota, você acabou de adquirida por nós!",
"A Boy Band One Direction!"]

const names = ["Pai","S/N","???"," "]
var true_bad = localStorage.getItem("0");

function passar_dia() {
    if(cont == 19){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/quintal.png"
        true_bad++
    }
    if(cont == dialogos.length){
        set_checkpoint ("final_1.html")
        window.location = "final_1.html"
    }

    muda_nome ()
    muda_personagem()
    
    
    
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
}

function mostrar_escolha(){
    if(cont == dialogos.length){
        e.setAttribute("style", "display: block;")
        return
    } else if (e.style = "display: block;"){
        e.setAttribute("style", "display: none;")
    }
}


function muda_nome(){
    
    let container = document.querySelector ("#nome p")

    if(cont == 7 || cont == 9 || cont == 11 || cont == 13 || cont == 16 || cont == 19 || cont == 21 || cont == 26 || cont == 31){
        container.innerText = names [0] 
    }
    if(cont == 5 || cont == 8 || cont == 10 || cont == 12 || cont == 17 || cont == 20 || cont == 23 || cont == 27){
        container.innerText = names [1] 
    }
    if(cont == 29 || cont == 35 || cont == 37){
        container.innerText = names [2] 
    }
    if(cont == 6 || cont == 14 || cont == 18 || cont == 24 || cont == 28 || cont == 30 || cont == 32 || cont == 36){
        container.innerText = names [3]
    }
    
}

function muda_personagem() {
    let personagem_img = document.querySelector ("#personagem_img")
    let img = document.querySelector ("#personagem_img img")
    
    if(cont == 7 || cont == 9 || cont == 11 || cont == 13 || cont == 16 || cont == 19 || cont == 21 || cont == 22 ||cont == 26 || cont == 31){
        personagem_img.classList.remove("escondido")
    }
    else{
        personagem_img.classList.add("escondido")
    }
}

let cont = 0 
var true_bad = localStorage.getItem("num")

const dialogos= ["Então Henrique, veio na festa só pra ficar sentado que nem um emo no canto da sala é?",
"Ele olha para mim meio irritado",
"Meu nome não é Henrique",
"Ué? Então Henri é apelido de quê?",
"Não te interessa",
"Ele me olha mais um pouco",
"Você é...?",
"Sério? S/N? A gente se viu hoje na escola.",
"E eu deveria lembrar?",
"... Beleza então.Olha se você puder me levar para um lugar mais quieto eu ficaria agradecida?",
"Eu não ficaria com você nem se você fosse a última pessoa da Terra",
"Eca, não! Quem disse que eu iria querer ficar com uma alma sebosa como você",
"Então quer o que comigo?",
"Eu quero que alguém que me leve para um lugar mais quieto para eu poder ler um pouco",
"... Ok",
"Sério?!",
"Eu já estava saindo mesmo.",
"Ele me leva até o quintal da casa onde um grupo mais quieto conversa",
"Quando saímos do barulho e vejo ele relaxando e respirando fundo como se tivessem tirado um peso das costas dele",
"Eu sento na grama e puxo o meu livro de novo",
"Quando ele vai sentar o Henri vê a playlist tocando no meu celular",
"Então era você que estava controlando o som",
"Talvez",
"Bom, eu te ajudei. Agora me empresta o seu celular",
"Por que?",
"Não é óbvio? eu quero escolher as músicas",
"Eu considero por um momento. Parece uma troca justa e eu nem tava prestando atenção na música mesmo",
"É aí que o caos se instaura",
"Ele começou tocando rap de anime a todo volume",
"Eu só tenho tempo de ver uma das kpoppers indo pra cima dos otakus antes de arrancar o celular da mão dele",
"Eu troco a música mas já é tarde de mais, a briga estourou com tudo no meio da sala",
"Não demora para o que começou como uma discussão virar uma porradaria generalizada entre todos que estavam na festa",
"Eu agarro a mão do Henri e arrasto ele para a rua quando a briga começa a vi na nossa direção",
"Que ideia de jerico foi aquela?",
"Eu digo arfando",
"Relaxa, foi divertido não é?",
"NÃO! CLARO QUE NÃO!",
"O pau tá comendo lá dentro e a culpa é sua! Agora tem um monte de gente machucada e a casa da coitada da dona tá toda quebrada!",
"Ele olha para mim, mas no escuro da rua mal iluminada é difícil ver que expressão ele está fazendo. No Silêncio eu consigo ouvir os sons da briga.",
"Você está certa. Eu não pensei nas consequências do que eu fiz",
"Não pensou mesmo. Na verdade, eu nem sei se você pensa.",
"Eu olho a hora no meu celular e vejo que já é quase 3 horas da manhã.",
"Tá tão tarde que nem vale a pena dormir. Vou chegar em casa bem a tempo de ir para a escola.",
"Vixe! Parece que eu perdi a noção da hora",
"Já está bem tarde. Eu posso te levar em casa.",
"Quem disse que eu gostaria de ir pra qualquer lugar contigo",
"É para compensar os problemas que causei",
"Penso um pouco e decido ir com ele. Não deve ter ônibus circulando até o meu bairro e não me sinto segura andando sozinha uma hora dessas",
"Eu viro para o carro que o Henri apontou e que carro. Eu posso não saber nada sobre o assunto mas eu sei que ele é caro",
"Caraca mano. Você é rico?",
"Ele faz que sim com a cabeça e abre a porta para mim.",
"Coloque o endereço no GPS",
"Eu coloco e ele começa a dirigir",
"Sabe tem uma coisa que tem me incomodado",
"Hum?",
"Se o seu nome não é Henrique então ele é só Henri?",
"Não",
"Ué?Então é Henri de quê?",
"Ele para e considera a resposta por um bom tempo",
"Bom...é complicado",
"Eu falo sobre mim se você me falar sobre você.",
"...Ok",
"Meus pais brigam muito. Eles tiveram um casamento arranjado e nenhum dos dois tem qualquer interesse um no outro",
"Eles sempre tiveram amantes. Acho que sempre vão ter.",
"Mas por algum motivo um não aceita que o outro tenha um amante",
"É estranho, mas eles ficam sempre se vigiando. Já vi meu pai mexendo no celular da minha mãe. Já vi ela contratando um detetive para seguir ele",
"Ok mas o que isso tem a ver com o seu nome",
"Tô chegando lá.Bom a pior briga que eles tiveram até hoje foi no meu nascimento",
"Meu pai não estava lá na hora do parto em si e só chegou um pouco depois",
"Ele estava na casa de uma das suas amantes e correu para o hospital quando recebeu a notícia",
"Claro que a minha mãe estava furiosa. Ela pensou que sei lá. Um filho ia melhorar as coisas.",
"Ou melhor ainda: Fazer ele para de trair a minha mãe para ela poder trair ele em paz",
"Claro que isso não deu certo",
"Bom quando a enfermeira entrou na sala e perguntou o nome do bebe ela ouviu a minha mãe berrando 'Hein Ricardo?' com meu pai seguido de silêncio",
"... Ela já tinha ouvido muitos nomes estranhos então acho que ela não estranhou sabe?",
"Pera, pera. Não me diga que seu nome é-",
"Meu nome é Henricardo sim",
"Eu faço o meu melhor para segurar o riso mas ele me manda um olhar sério e isso é o bastante para eu rachar",
"Desculpa mano desculpa. Mas que diabos de enfermeira é essa cara?",
"Quem vê isso e fala sim esse é o nome desse bebê",
"Quando eu me controlo eu vejo que ele já parou o carro no endereço que eu botei",
"Você mora aqui?",
"Eu levanto o olhar para ver uma barraquinha de cachorro quente no meio de uma pracinha",
"Claro que não. Mas eu tô com fome e você é rico então eu acho que dá pra gastar a sua gasolina sem peso na consciência",
"Abusada",
"Pense nisso como compensação pelo inferno na festa",
"Nós fazemos o nosso pedido e sentamos em um dos banquinhos espalhados ao redor da barraca",
"Na nossa frente tem uma mesinha de criança tão alta quanto o banco",
"Sabe Henrique lá em casa a coisa é embolado de um jeito bem diferente",
"Bom acho melhor começar pelo que importa né?",
"Bom o meu pai é de uma família meio... vamos dizer diferente",
"Ele é da cidade e antes de conhecer a minha mãe o seu melhor amigo era o Eduardo, o vizinho dele",
"As duas famílias era muito próximas então eles basicamente cresceram juntos",
"Quando a minha mãe se mudou eles tinham uns oito anos",
"Jonas, Eduardo e Bela, os três eram simplesmente inseparáveis. Não dava para ver um sem os outros",
"Até o dia que o Eduardo fez 20 anos",
"Nesse dia o segredo da família dele acabou sendo revelado",
"O Eduardo era de uma família de vampiros",
"Logo ele também era vampiro",
"O lance é a que a família do meu pai tem um problema com vampiros",
"Tipo, uma rixa milenar entre os dois",
"A família do Eduardo foi obrigada a fugir da cidade e desde então eles procuram o Eduardo",
"Meu pai virou um inventor e passa todo o seu tempo criando invenções para tentar encontrar o Eduardo",
"Isso dá mais despesa que lucro então minha mãe tem que segurar as contas",
"E ela consegue fazer isso enquanto estuda medicina para poder trabalhar no hospital",
"Ou melhor, para roubar bolsa de sangue do hospital",
"E esse é o grande segredo da minha família!",
"Dramático",
"Bastante é",
"No tempo que levou para eu contar a história dos meus pais terminamos de comer e ele me deixa em casa",
"Bom... acho que nos vemos amanhã?",
"Quer dizer hoje né?",
"Se eu não dormi e acordei ainda não mudou a data",
"Ele sorri e vai embora",
"Mas que noite! Não tenho certeza se a valeu a pena ter ido naquela festa mas com certeza tive uma noite interessante para dizer o mínimo",
"O Henri acabou sendo pior do que eu pensava. Mas ao mesmo tempo...",
"Será que ele só é do jeito que ele é por causa daquela história que ele me contou? Talvez embaixo do exterior grosso tenha alguém sensível e sofrido",
"Eu lembro do sorrisinho dele antes de ir e sinto meu rosto ficando vermelho",
"Sabe... Ele até que é bonito.",
"Quando ele não age como um babaca",
"Mas lembrando do que ele me falou eu não consigo não perdoar ele pela primeira impressão terrível",
"Com uma família dessas eu também seria meio insuportável",
"As imagens da noite passada rodam na minha cabeça no caminho até a escola",
"Quando eu chego percebo que todos os alunos parecem agitados",
"Eu vejo a Elisa chegando e corro para o lado dela",
"Lisa o que aconteceu pra tá todo mundo tão agitado?",
"Você não sabe S/N? Amanhã vamos ter as provas de finais",
"Vixe! Mas já?!",
"Sim. E a tradição da escola é permitir que os alunos tenham o último dia livre de aula para se prepararem para as provas",
"E vai ser prova de quê?",
"Ela me manda um sorriso",
"Todas as matérias",
"Eu vejo a minha vida passar na frente dos meus olhos",
"Pois é acho que não vou passar",
"Claro que vai! Só precisa estudar. Se quiser ajuda venha me ver na biblioteca.",
"Eu vejo ela ir e escuto a porta se abrindo atrás de mim",
"Viro para ver Henri entrando",
"Fala Henrique",
"Meu nome não é Henrique",
"Vai estudar para a prova de amanhã?",
"Não.",
"Ué? Veio fazer o quê então?",
"Arrumar cola",
"Sério?",
"Sim.Se quiser vou estar na biblioteca",
"...Vixe e agora?",
" "]

const names = ["Henri","S/N","Elisa", " "]

function passar_dia() {
    if(cont == 40){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/rua_noite.jpg"
    }
    if(cont == 129){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/rua_dia.jpg"
    }
    if(cont == 130){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/corredor.jpg"
    }
    if(cont == dialogos.length){
        element.setAttribute("hidden","hidden")
        true_bad++
        localStorage.setItem("num", true_bad);
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

    if(cont == 2 || cont == 4 || cont == 6 || cont == 8 || cont == 10 || cont == 12 || cont == 14 || cont == 16 || cont == 21 || cont == 23 || cont == 25 || cont == 35 || cont == 39 || cont == 44 || cont == 46 || cont == 51 || cont == 54 || cont == 56 || cont == 59 || cont == 61 || cont == 67 || cont == 75 || cont == 81 || cont == 84 || cont == 107 || cont == 111 || cont == 138 || cont == 140 || cont == 142 || cont == 144){
        container.innerText = names[0]
    }
    if(cont == 0 || cont == 3 || cont == 7 || cont == 9 || cont == 11 || cont == 13 || cont == 15 || cont == 22 || cont == 24 || cont == 33 || cont == 36 || cont == 40 || cont == 43 || cont == 45 || cont == 49 || cont == 53 || cont == 55 || cont == 57 || cont == 60 || cont == 66 || cont == 76 || cont == 78 || cont == 83 || cont == 85 || cont == 88 || cont == 108 || cont == 110 || cont == 112 || cont == 125 || cont == 127 || cont == 129 || cont == 133 || cont == 137 || cont == 139 || cont == 141 || cont == 143){
        container.innerText = names[1]
    }
    if(cont == 126 || cont == 128 || cont == 131 || cont == 134 ){
        container.innerText = names[2]
    }
    if(cont == 1 || cont == 5 || cont == 17 || cont == 26 || cont == 34 || cont == 41 || cont == 47 || cont == 50 || cont == 52 || cont == 58 || cont == 77 || cont == 80 || cont == 82 || cont == 86 || cont == 109 || cont == 113 || cont == 130 || cont == 132 || cont == 135 || cont == 145){
        container.innerText = names[3]
    }
}

function muda_personagem(){
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 126 || cont == 128 || cont == 131 || cont == 134 ){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/presidenta.png"
    }
    if(cont == 2 || cont == 4 || cont == 6 || cont == 8 || cont == 10 || cont == 12 || cont == 14 || cont == 16 || cont == 21 || cont == 23 || cont == 25 || cont == 35 || cont == 39 || cont == 44 || cont == 46 || cont == 51 || cont == 54 || cont == 56 || cont == 59 || cont == 61 || cont == 67 || cont == 75 || cont == 81 || cont == 84 || cont == 107 || cont == 111 || cont == 138 || cont == 140 || cont == 142 || cont == 144){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/Bad_Boy.png"
    }
    if(cont == 1 || cont == 5 || cont == 17 || cont == 26 || cont == 34 || cont == 41 || cont == 47 || cont == 50 || cont == 52 || cont == 58 || cont == 77 || cont == 80 || cont == 82 || cont == 86 || cont == 109 || cont == 113 || cont == 130 || cont == 132 || cont == 135 || cont == 145 || cont == 0 || cont == 3 || cont == 7 || cont == 9 || cont == 11 || cont == 13 || cont == 15 || cont == 22 || cont == 24 || cont == 33 || cont == 36 || cont == 40 || cont == 43 || cont == 45 || cont == 49 || cont == 53 || cont == 55 || cont == 57 || cont == 60 || cont == 66 || cont == 76 || cont == 78 || cont == 83 || cont == 85 || cont == 88 || cont == 108 || cont == 110 || cont == 112 || cont == 125 || cont == 127 || cont == 129 || cont == 133 || cont == 137 || cont == 139 || cont == 141 || cont == 143){
        personagem_img.classList.add("escondido")
    }
}
let cont = 0 

const dialogos= ["Eu posso até gostar de você mas esse não é meu trabalho",
"Eu tô aqui para te ajudar, te apoiar mas não sou sua terapeuta",
"Que? Eu não quis dizer isso-",
"Não? Mas pelo jeito que você falou parece que o seu plano genial era colocar toda a responsabilidade de te transformar em alguém melhor em cima de mim?",
"Claro que não! Mas você me deixa melhor!",
"Por que? Porque sozinho você nunca ia perceber que provocar uma briga enorme e quebrar a casa de alguém é errado se eu não estiver lá?",
"Olha eu não quero que você pense que não pode mudar, mas você tem que fazer esforço para melhorar. Não eu.",
"Eu quero ver você crescer e melhorar mas eu tenho a impressão que se eu ficar junto eu vou acabar tendo que carregar o peso dos seus sentimentos sem receber nada em troca",
"E quer saber a pior parte disso? Eu continuaria com você até o peso que você colocar em cima de mim me esmagar",
"Eu respiro fundo e vejo que Henri está branco",
"Eu não sei se eu estou pronta para ficar contigo e eu acho que você também não está pronto para namorar",
"Então me dê um tempo. E quando eu te ver de novo, tenta me dar mais uma chance.",
"Eu dou um sorriso e seguro a mão dele",
"Ok",
"5 Anos Depois",
"Filha eu mal posso acreditar que você finalmente está abrindo o seu restaurante!",
"Eu mudo o telefone de mão enquanto termino de limpar as mesas",
"Nem eu, mãe! Teve muito perrengue, mas finalmente deu certo!",
"Ai filha vamos chegar aí daqui a pouco. Sabe como é o Eduardo né? Super lerdo se arrumando.",
"Não se preocupe não mãe. É até melhor você demorar um pouquinho e fazer uma entrada dramática",
"Pensa só: A médica famosa Bela Nunes chega com todo estilo com seu marido, o inventor do ano Jonas Pereira, e o milionário misterioso Eduardo Gomes",
"Filha do céu não sonha não. Mas me diga, o tal cozinheiro que você contratou já chegou?",
"Ainda não. Cara que azar que o meu cozinheiro ficou doente no dia de abrir",
"Olha ele não era o único chefe né? E esse cara novo tá super bem recomendado e tá vindo para trabalhar como assistente de cozinha. Vai dar tudo certo viu?",
"Eu sei, eu sei.",
"Eu escuto alguém na porta",
"Mãe eu tenho que desligar o cara novo chegou. Te vejo depois viu?",
"Viu filha até mais",
"Eu vou até a porta e vejo um rosto familiar lendo alguma coisa no celular",
"Oi, eu estou procurando a Sofia Nunes. Eu vim substituir o assistente de cozinha dela.",
"Henri?",
"S/N?",
"Nossa faz muito tempo, né? Como vai Henrique",
"As coisas tem ido muito bem",
"Ué, não vai reclamar que eu te chamei pelo nome errado?",
"Claro, que não. Meu nome é Henrique agora",
"Você mudou de nome?",
"Foi a primeira coisa que eu fiz quando saí de casa",
"Mandou bem então. É bem melhor que Henricardo vamos concordar né?",
"Eu não sabia que seu nome era esse",
"E eu não sabia que seu nome tinha mudado.",
"Quem sabe. Talvez tenha sido o destino",
"Quem sabe",
"Eu escuto um alarme tocando no meu celular avisando que o restaurante abre em 2 horas",
"Entra Henri, temos muito o que conversar.",
"Não se preocupe, temos todo o tempo do mundo"]

const names = ["Henri", "S/N", "Mãe", " "]

function passar_dia() {
    if(cont == 14){
        let bg = document.querySelector("#background img")
        bg.src = "../../assets/img/restaurante_SN.jpg"
    }
    if(cont == dialogos.length){
        set_checkpoint ("final_5.html")
        window.location = "final_5.html"
    }
    muda_nome()
    muda_personagem()
    let container = document.querySelector ("#dialogo p")
    
    cont++;
    

}

function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 2 || cont == 4 || cont == 11 || cont == 29 || cont == 31 || cont == 33 || cont == 35 || cont == 37 || cont == 39 || cont == 42 || cont == 45 ){
        container.innerText = names[0]
    }
    if(cont == 0 || cont == 3 || cont == 5 || cont == 10 || cont == 13 || cont == 17 || cont == 19 || cont == 22 || cont == 24 || cont == 26 || cont == 30 || cont == 32 || cont == 34 || cont == 36 || cont == 38 || cont == 40 || cont == 44){
        container.innerText = names[1]
    }
    if(cont == 15 || cont == 18 || cont == 21 || cont == 23 || cont == 27){
        container.innerText = names[2]
    }
    if(cont == 9 || cont == 12 || cont == 14 || cont == 16 || cont == 25 || cont == 28 || cont == 43){
        container.innerText = names[3]
    }
}

function muda_personagem () {
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 2 || cont == 4 || cont == 11){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/Bad_Boy.png"
    }    
    if(cont == 29 || cont == 31 || cont == 33 || cont == 35 || cont == 37 || cont == 39 || cont == 42 || cont == 45 ){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/Bad_Boy_adulto.png"
    }
    if(cont == 17 || cont == 19 || cont == 22 || cont == 24 || cont == 26 || cont == 30 || cont == 32 || cont == 34 || cont == 36 || cont == 38 || cont == 40 || cont == 44){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/SN_adulta.png"
    }  
    if (cont == 9 || cont == 12 || cont == 14 || cont == 16 || cont == 25 || cont == 28 || cont == 43 || cont == 0 || cont == 3 || cont == 5 || cont == 10 || cont == 13) {
        personagem_img.classList.add("escondido")
    }
    
}
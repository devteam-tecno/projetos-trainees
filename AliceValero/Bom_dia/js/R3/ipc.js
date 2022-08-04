let cont = 0 

const dialogos= ["Eu me viro para a Lisa",
"Olha se você tiver vontade de ir eu até considero ir contigo mas se não...",
"Não se preocupe. Você sabe que eu tenho mais coisas para fazer",
"Imagino",
"O plano deve ser estudar como sempre",
"Sabe S/N, eu poderia ir contigo até a sua casa.",
"Sério? Mas Lisa o caminho não é meio fora de mão para você?",
"Só um pouquinho",
"Mentira. Ela mora no outro lado da cidade e precisaria de dois ônibus para chegar em casa.",
"Seria melhor não fazer ela se desviar tanto do caminho dela",
"Claro que no pior dos casos ela sempre pode dormir na minha casa. Não é como se meus pais fossem brigar",
" "]

const names = ["Elisa", "S/N"," "]

function passar_dia() {
    if(cont == dialogos.length){
        element.setAttribute("hidden","hidden")
    }
    muda_nome()
    muda_personagem ()
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
    set_checkpoint("../R5/cap.html")
    window.location = "../R5/cap.html"
}

function escolha_2(){
    set_checkpoint("../R5/is.html")
    window.location = "../R5/is.html"

}
function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 2 || cont == 5 || cont == 7 ){
        container.innerText = names [0]
    }
    if(cont == 1 || cont == 3 || cont == 6 ){
        container.innerText = names[1]
    }
    if(cont == 0 ||cont == 8){
        container.innerText = names [2]
    }
}   
function muda_personagem(){
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 2 ||cont == 5 || cont == 7 ){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/presidenta.png"
    }
    else {
        personagem_img.classList.add("escondido")
    }
    
}
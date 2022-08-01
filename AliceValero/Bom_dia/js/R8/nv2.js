let cont = 0 

const dialogos= ["Ela me manda um sorriso afiado",
"Parece um plano perfeito",
"5 Anos Depois",
"Povo de Nova Pentescopeia. Nossas Líderes supremas vieram agraciá-los com a sua presença",
"Aquelas que uníram a humanidade em sua busca por paz e conseguiram salvar a nossa civilização dos efeitos das Terríveis mudanças climática",
"As únicas: Sofia Nunes e Elisa Suzuki!"]

const names = ["Elisa", "Apresentador"," "]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("final_6.html")
        window.location = "final_6.html"
    }
    muda_nome()
    muda_personagem()
    let container = document.querySelector ("#dialogo p")
    cont++;

}

function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 1){
        container.innerText = names [0]
    }
    if(cont == 3){
        container.innerText = names [1]
    }
    if(cont == 0 || cont == 2){
        container.innerText = names [2]
    }
}

function muda_personagem () {
    let personagem_img = document.querySelector("#personagem_img")
    let img = document.querySelector("#personagem_img img")

    if(cont == 1){
        personagem_img.classList.remove("escondido")
        img.src = "../../assets/pers/presidenta.png"
    }else{
        personagem_img.classList.add("escondido")
    } 
}
let cont = 0 

const dialogos= ["Sabe eu sempre amei um bom desafio"]

const names = ["S/N"]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("final_4.html")
        window.location = "final_4.html"
    }
    muda_nome()
    let container = document.querySelector ("#dialogo p")
    container.innerText = dialogos [cont]
    cont++;
    

}

function muda_nome(){
    let container = document.querySelector("#nome p")

    if(cont == 0){
        container.innerText = names [0]
    }
}
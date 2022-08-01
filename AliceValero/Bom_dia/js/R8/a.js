let cont = 0 

const dialogos= ["Então posso pedir o seu coração?"]

const names = ["S/N"]

function passar_dia() {
    if(cont == dialogos.length){
        set_checkpoint ("final_7.html")
        window.location = "final_7.html"
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
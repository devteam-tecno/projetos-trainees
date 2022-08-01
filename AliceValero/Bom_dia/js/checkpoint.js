let caminho= window.location.pathname
let checkpoint = localStorage.getItem("checkpoint")

if(!checkpoint){
    localStorage.setItem ("checkpoint",caminho)
}else{
    if(caminho != checkpoint){
        window.location = checkpoint
    }
}

function set_checkpoint (path){
    localStorage.setItem ("checkpoint",path)
}
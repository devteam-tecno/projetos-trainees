const notasGrid = document.getElementById("bloco-de-notas");
const botaoAddNota = notasGrid.querySelector(".add-nota");

getNotas().forEach(nota =>{
    const notaElemento = criarNota(nota.id, nota.conteudo);
    botaoAddNota.parentNode.insertBefore(notaElemento, botaoAddNota.nextSibling);
    /*notasGrid.insertBefore(notaElemento, botaoAddNota);*/
});

botaoAddNota.addEventListener("click", () => addNota());

function getNotas(){
    return JSON.parse(localStorage.getItem("blocoDeNotas-notas") || "[]");
}

function salvarNotas(notas){
    localStorage.setItem("blocoDeNotas-notas", JSON.stringify(notas))
}

function criarNota(id, conteudo){
    const elementoNota = document.createElement("textarea");
    
    elementoNota.classList.add("nota");
    elementoNota.value = conteudo;
    elementoNota.placeholder = "Nota vazia!";

    elementoNota.addEventListener("change", ()=>{
        atualizarNota(id, elementoNota.value);
    });

    elementoNota.addEventListener("dblclick", () =>{
        const deletar = confirm("Deseja apagar a anotação?");
        if(deletar){
            deletarNota(id, elementoNota) ;
        }
    });

    return elementoNota;
}

function addNota(){
    const notas = getNotas();
    const notaObjeto = {
        id: Math.random(),
        conteudo: ""
    };

    const elementoNota = criarNota(notaObjeto.id, notaObjeto.conteudo);
    botaoAddNota.parentNode.insertBefore(elementoNota, botaoAddNota.nextSibling); /*funciona como um "insertAfter"*/
    notas.push(notaObjeto);
    salvarNotas(notas);
}

function atualizarNota(id, novoConteudo){
    const notas = getNotas();
    const notaParaAtualizar = notas.filter(nota => nota.id == id)[0];

    notaParaAtualizar.conteudo = novoConteudo;
    salvarNotas(notas);
}

function deletarNota(id, elementoNota){
    const notas = getNotas().filter(nota => nota.id != id);
    
    salvarNotas(notas);
    notasGrid.removeChild(elementoNota)
}
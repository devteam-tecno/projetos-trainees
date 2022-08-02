// JS do Carousel
const setaCarousel = document.querySelectorAll(".moveCarousel")

let imagemAtualCarousel = 0

let translateX = 0


const imgCarousel = document.querySelectorAll(".imagemCarousel")

const carouselWrapper = document.querySelector(".gallery-wrapper")

//irá percorrer as duas setas do carousel
setaCarousel.forEach(move =>{
    move.addEventListener("click", ()=>{
            //pega a largura da janela de qualquer tamanho
            let larguraTela = carouselWrapper.offsetWidth
            //verifica qual botao foi clicado
            eNext = move.classList.contains("botao-next")
            if(eNext){
                imagemAtualCarousel +=1
                translateX += larguraTela
            }
            else{
                imagemAtualCarousel -=1
                translateX -= larguraTela

            }
            //Quando chega á ultima imagem e o botao é pressionado para a direita, ele retorna á primeira
            if(imagemAtualCarousel > imgCarousel.length-1){
                imagemAtualCarousel = 0
                translateX = 0
            }
            //Quando chega a primeira imagem e o botao é pressionado para a esquerda, ele irá ser encaminhado para a ultima imagem
            if(imagemAtualCarousel < 0 ){
                imagemAtualCarousel = imgCarousel.length-1
                translateX = 2*larguraTela
            }
            //Altera a
            carouselWrapper.style.transform = `translateX(${-translateX}px)`

        })
})
// Fim do JS do Carousel

// Js do SlideShow
const imgSlide = document.querySelectorAll(".imagemSlide")
let imagemPrincipalSlide = 0

var SlideShow
//São ao todo 3 imagens, porém apenas uma tem a classe "principal", onde ela fica visível, enquando as outras estam com a opacidade em 0. A função irá alterar constantemente qual delas possue a classe "principal"
imgSlide.forEach(imagem =>{
    //Enquanto o mouse estiver em cima da imagem, a cada 2s irá passar a classe para outra imagem
    imagem.addEventListener("mouseover", ()=>{
        SlideShow = setInterval( ()=>{
            
            imgSlide[imagemPrincipalSlide].classList.remove('imagemSlide-principal')
            
            imagemPrincipalSlide ++

            //Quando chega á ultima imagem, ele retorna á primeira
            if(imagemPrincipalSlide >= imgSlide.length){
                imagemPrincipalSlide = 0
            }
        
            imgSlide[imagemPrincipalSlide].classList.add('imagemSlide-principal')
        }, 2000)
    })
    imagem.addEventListener("mouseout", ()=>{
        //reseta o intervalo quando o mouse é retirado
        clearInterval(SlideShow)
    })
})
// Fim do Js do SlideShow
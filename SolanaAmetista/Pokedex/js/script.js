const pName = document.querySelector('.pkmName')
const pNumber = document.querySelector('.pkmN')
const pImg = document.querySelector('.pkmImg')
const form = document.querySelector('.form')
const search = document.querySelector('.search')
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

let id = 0;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (APIresponse.status == 200) {
        const data = await APIresponse.json()
        return data
    }
}

const renderPkm =  async (pokemon) => {
    pName.innerHTML = 'Carregando...'
    const data = await fetchPokemon(pokemon)
    if (data) {
        pName.innerHTML = data.name
        pNumber.innerHTML = data.id + " - "
        pImg.src = data.sprites.versions['generation-viii']['icons']['front_default']
        //pImg.src = data.sprites.versions['generation-v']['black-white']['animated']['front_default']
        id = data.id
    }
    else {
        pName.innerHTML = 'Não encontrado'
        pNumber.innerHTML = '0' + " - "
        pImg.src = ''
    }
    search.value = ''

}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPkm(search.value.toLowerCase())
})

prev.addEventListener('click', () => {
    renderPkm(--id)
})

next.addEventListener('click', () => {
    renderPkm(++id)
})



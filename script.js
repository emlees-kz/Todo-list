const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0

btn.addEventListener('click', (e) => {
    if(input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})

function createDeleteElements(value) {
    i++

    const btnStrike = document.createElement('button')
    const btnDell = document.createElement('button')
    const li = document.createElement('li')

    li.className = 'li'
    li.textContent = value

    btnStrike.className = 'btn'
    btnStrike.textContent = 'Сделано'
    li.appendChild(btnStrike)
    
    btnDell.className = 'btn btnDell'
    btnDell.textContent = 'Удалить'
    li.appendChild(btnDell)

    
    // toggle class active
    btnStrike.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    // remove todo
    btnDell.addEventListener('click', (e) => {
        i--
        total.textContent = i
        result.removeChild(li)

    })

    total.textContent = i

    result.appendChild(li)
}
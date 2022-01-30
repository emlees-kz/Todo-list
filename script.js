const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0

// add event

btn.addEventListener('click', (e) => {
    // console.log(input.value);
    // result.innerHTML += `<li>${input.value}</li>`
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})

 // create and delete todo
function createDeleteElements(value) {
    i++
    const btn = document.createElement('button')
    const li = document.createElement('li')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'удалить'
    li.appendChild(btn)

    // remove todo
    btn.addEventListener('click', (e) => {
        i--
        total.textContent = i
        result.removeChild(li)
    })
    // toggle class active
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = i
    result.appendChild(li)
}
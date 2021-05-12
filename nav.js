let showBtn = document.getElementById('showBtn')
let menu = document.querySelector('.mobile ul')

showBtn.addEventListener('click', () => {
    menu.classList.toggle('show')
    showBtn.classList.toggle('ac')
})

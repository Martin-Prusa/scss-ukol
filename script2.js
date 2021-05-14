let cards

let myOnLoadFunc = function () {
  cards = document.querySelectorAll("[data-toggle='collapse']")
  removeShow()
  cards.forEach((card) => {
    let content = getContent(card)
    card.addEventListener('click', () => {
      removeShow(card)
      content.style.display = content.style.display === 'none' ? 'block' : 'none'
    })
  })
}

function removeShow(no) {
  cards.forEach((card) => {
    if (no !== card) {
      getContent(card).style.display = 'none'
    }
  })
}

function getContent(card) {
  let content = card.dataset.target
  return document.getElementById(content)
}

window.onload = myOnLoadFunc

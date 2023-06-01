import { suggestUsers } from "./database";
import { renderPosts } from "./posts";

renderItems()
renderPosts()

function renderItems() {
    for (let i = 0; i < suggestUsers.length; i++){
        const ulSuggest = document.querySelectorAll('suggestions__list')
        
        const listSuggest = document.createElement('li')
        listSuggest.classList.add('suggestions__item')

        const divSuggest = document.createElement('div')
        divSuggest.classList.add('div__user')

        const divSuggestImg = document.createElement('div')
        divSuggestImg.classList.add('div__img')

        const imgSuggest = document.createElement('img')
        const divSuggestUser = document.createElement('div')
        divSuggestUser.classList.add('div__user-name')

        const h3SuggestUser = document.createElement('h3')
        const spanSuggestUser = document.createElement('span')
        const buttonSuggest = document.createElement('button')
        buttonSuggest.addEventListener('click', () => {
            buttonSuggest.classList.toggle('following')
            if (buttonSuggest.textContent == 'Seguir'){
                buttonSuggest.textContent = 'Seguindo'
            } else {
                buttonSuggest.textContent = 'Seguir'
            }
        })

        buttonSuggest.classList.add('section__aside--button')

        h3SuggestUser.textContent = suggestUsers[i].user
        spanSuggestUser.textContent = suggestUsers[i].stack
        imgSuggest.src = suggestUsers[i].img
        buttonSuggest.textContent = 'Seguir'

        divSuggestImg.appendChild(imgSuggest)
        divSuggestUser.appendChild(h3SuggestUser)
        divSuggestUser.appendChild(spanSuggestUser)

        divSuggest.appendChild(divSuggestImg)
        divSuggest.appendChild(divSuggestUser)

        listSuggest.appendChild(divSuggest)
        listSuggest.appendChild(buttonSuggest)
        ulSuggest.appendChild(listSuggest)
    }
}
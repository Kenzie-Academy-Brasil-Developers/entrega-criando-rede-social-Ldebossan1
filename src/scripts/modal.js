export function renderModal(postToModal) {
    const modal = document.getElementById ('modal')
    modal.innerHTML = ''

        const divUser = document.createElement('div')
        divUser.dataset.id = postToModal.id
        divUser.classList.add ('div__user', 'div__user-modal')

        const userContainer = document.createElement('div')
        userContainer.classList.add('user-container-div')

        const divImg = document.createElement('div')
        divImg.classList.add('div__img')
        const img = document.createElement('img')
        img.src = postToModal.img
        divImg.appendChild(img)

        const divUserName = document.createElement('div')
        const h3 = document.createElement('h3')
        divUserName.classList.add('div__user-name')
        h3.textContent = postToModal.user

        const span = document.createElement('span')
        span.textContent = postToModal.stack

        divUserName.appendChild(h3)
        divUserName.appendChild(span)
        userContainer.appendChild(divImg)
        userContainer.appendChild(divUserName)

        const h2 = document.createElement('h2')
        h2.classList.add('h2-modal')

        const p = document.createElement('p')
        p.classList.add('p-modal')
        h2.textContent = postToModal.title
        p.textContent = postToModal.text
        divUser.appendChild(userContainer)
        divUser.appendChild(h2)
        divUser.appendChild(p)

        const buttonClose = document.createElement('button')
        buttonClose.classList.add('buttonClose')
        buttonClose.textContent = 'X'

        divUser.id = 'div-user-id'

        modal.appendChild(divUser)
        modal.appendChild(buttonClose)

        modal.showModal()
        buttonClose.addEventListener('click', () => {
            modal.close()
        })
        
}
import { suggestUsers } from "./database.js";
import { renderPosts } from "./posts.js";

renderItems();
renderPosts();



function renderItems() {
    for (let i = 0; i < suggestUsers.length; i++) {

        const ulSuggestion = document.querySelector(".suggestions__list");

        const listSuggestion = document.createElement("li");
        listSuggestion.classList.add("suggestions__item");

        const divSuggestion = document.createElement("div");
        divSuggestion.classList.add("div__user");

        const divSuggestionImg = document.createElement("div");
        divSuggestionImg.classList.add("div__img");

        const imgSuggestions = document.createElement("img");

        const divSuggestionUser = document.createElement("div");
        divSuggestionUser.classList.add("div__user-name");

        const h3SuggestionUser = document.createElement("h3");
        const spanSuggestionUser = document.createElement("span");

        const buttonSuggestion = document.createElement("button");
        buttonSuggestion.addEventListener("click", () => {
            buttonSuggestion.classList.toggle("following")
            if (buttonSuggestion.textContent == "Seguir") {
                buttonSuggestion.textContent = "Seguindo"
            }
            else {
                buttonSuggestion.textContent = "Seguir"
            }
        })
        buttonSuggestion.classList.add("section__aside--button");

        h3SuggestionUser.textContent = suggestUsers[i].user;
        spanSuggestionUser.textContent = suggestUsers[i].stack;
        imgSuggestions.src = suggestUsers[i].img
        buttonSuggestion.textContent = "Seguir";

        divSuggestionImg.appendChild(imgSuggestions);
        divSuggestionUser.appendChild(h3SuggestionUser);
        divSuggestionUser.appendChild(spanSuggestionUser);

        divSuggestion.appendChild(divSuggestionImg);
        divSuggestion.appendChild(divSuggestionUser);

        listSuggestion.appendChild(divSuggestion);
        listSuggestion.appendChild(buttonSuggestion);
        ulSuggestion.appendChild(listSuggestion);
    }

}



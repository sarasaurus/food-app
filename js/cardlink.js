const card = document.querySelectorAll(".card, .card_sm");

const allCards = Array.from(card);
//we are using 'a' here for simplicity but ideally you should put a class like 'clickable' on every clicable element inside card(a, button) and use that in query selector
console.log(`the card is: ${card}`);



// function handleClick(event) {

// }
allCards.forEach((ele) => {
    let mainLink = ele.querySelector(".main-link");
    let clickableElements = Array.from(ele.querySelectorAll("a, img"));
    console.log(`clickable elements${clickableElements}`)

    clickableElements.forEach((ele) => {
        ele.classList.add("clickable")
        ele.addEventListener("click", (e) => e.stopImmediatePropagation)
    });

    ele.addEventListener("click", (e) => {
        const noTextSelected = !window.getSelection().toString();
        console.log(`a click happened${e}`)
        if (noTextSelected) {
            console.log(`no text was selected mainlink: ${mainLink}`)
            mainLink.click();
        }
        console.log(`else text was selected mainlink: ${mainLink}`)
    })
});

console.log("cardlink is active")
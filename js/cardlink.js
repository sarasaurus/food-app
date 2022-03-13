const card = document.querySelector(".card");
const mainLink = card.querySelector(".main-link");
const clickableElements = Array.from(card.querySelectorAll("a")); //we are using 'a' here for simplicity but ideally you should put a class like 'clickable' on every clicable element inside card(a, button) and use that in query selector

clickableElements.forEach((ele) =>
ele.addEventListener("click", (e) => e.stopPropagation())
);

function handleClick(event) {
const noTextSelected = !window.getSelection().toString();

if (noTextSelected) {
mainLink.click();
}
}

card.addEventListener("click", handleClick);
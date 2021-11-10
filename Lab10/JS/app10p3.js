function getAnswer(event) {
    let capital = event.target.getAttribute("data-answer");
    event.target.innerHTML = capital;
}
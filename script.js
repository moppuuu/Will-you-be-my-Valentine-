const messages = [
    "abuhhh SURE KA??",
    "Ano SUREEEEEEE??",
    "Sure na sure ka???",
    "Bebyyyy please...",
    "Just think about it carefully!",
    "If you say no, di tayo bati...",
    "Mag tatampo ako...",
    "Mag tatampo talaga ako...",
    "Sige na nga, wag na......",
    "Joke lang, say yes PLEASEEEE! ❤️"
    
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

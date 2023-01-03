let btn: any = document.querySelector(".create-note");
let container: any = document.querySelector(".notes-container");

btn.addEventListener("click", function (e) {
    let text = document.createElement('textarea');
    text.placeholder = 'Digite algo';
    text.className = 'note';
    container.appendChild(text);
})


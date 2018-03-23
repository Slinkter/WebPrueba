document.body.addEventListener("click", function () {
    menu.classList.toggle("open");
});

document.querySelector("#close").addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.querySelector("#menu").addEventListener("click", (e) => {
    e.stopPropagation();
});
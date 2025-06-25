let shares = document.querySelector(".share");
let sharecon = document.querySelector(".sharecon");

shares.addEventListener("click", function() {
    sharecon.classList.toggle("show");
});
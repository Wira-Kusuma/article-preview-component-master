const share = document.querySelector(".share");
const sharecon = document.querySelector(".sharecon");

share.addEventListener("click", function() {
    sharecon.classList.toggle("show");
});
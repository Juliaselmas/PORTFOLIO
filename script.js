console.log("Just testing!");

let modal = document.getElementById("modal");
let openModalBtn = document.querySelector(".modal-button");
let span = document.querySelector(".close");

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
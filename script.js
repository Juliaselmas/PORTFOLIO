console.log("Just testing!");

//let modal = document.querySelector(".modal");

let openModalBtn = document.querySelectorAll(".modal-button");
let closeModalBtn = document.querySelectorAll(".close");

function openModal(modalId) {
 let modal = document.getElementById(modalId);
 if (modal) {
    modal.style.display = "block";
 }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

openModalBtn.forEach(button => {
    button.addEventListener("click", () => {
        let modalId = button.getAttribute("data-modal");
        openModal(modalId);
    });
});

closeModalBtn.forEach(button => {
    button.addEventListener("click", () => {
        let modalId = button.getAttribute("data-modal");
        closeModal(modalId);
    });
});

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
});

/*
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
*/
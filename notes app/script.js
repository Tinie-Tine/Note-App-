const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    let img = document.createElement("img");
    img.src = "images/delete.png";
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage();
});

notesContainer.addEventListener("input", () => {
    updateStorage();
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

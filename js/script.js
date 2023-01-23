console.log("Witajcie na zapleczu");

let przycisk = document.querySelector(".przycisk");
let photo = document.querySelector(".photo");
przycisk.addEventListener("click", () => {
photo.remove();
});

let button = document.querySelector(".buttonT");
let table = document.querySelector(".table");
let themeName = document.querySelector(".themeName");
button.addEventListener("click", () => {
  table.classList.toggle("display");
  if (table.classList.contains("display")) {
    themeName.innerText = "Pokaż tabelę";
  } else {
    themeName.innerText = "Ukryj tabelę";
  }
});

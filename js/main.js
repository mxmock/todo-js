// selection de la div avec l'id "root"
const root = document.getElementById("root");
// création d'une div
const todoHtml = document.createElement("div");
// ajout de la class "todo" à la div créée
todoHtml.classList.add("todo");
// insertion du texte 'todo 1' dans la div
todoHtml.innerText = "todo 1";
// insertion de la div créée dans la div avec l'id "root"
root.appendChild(todoHtml);

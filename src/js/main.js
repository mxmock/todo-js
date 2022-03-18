// selection de la div avec l'id "root"
const root = document.getElementById("root");
// création d'un <ul>
const todoUl = document.createElement("ul");
// ajout de la class "todo" au <ul> créée
todoUl.classList.add("todos-list");
// insertion du contenu dans le <ul>
todoUl.innerHTML = `
<li class="todo">
  <a class="todo__link" href='#'>todo numéro 1</a>
</li>
`;
// insertion de la div créée dans la div avec l'id "root"
root.append(todoUl);

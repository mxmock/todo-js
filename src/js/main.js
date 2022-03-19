const main = () => {
  // selection de la div avec l'id "root"
  const root = document.getElementById("root");
  // récupérer la liste des todos
  const todos = generateTodos(12);
  // créer le <ul> qui contiendra la liste de todos
  const todoUl = createUl(todos);
  // insertion du <ul> dans <div id="root">
  root.append(todoUl);
};

const generateTodos = (nbrOfTodos) => {
  // tableau vide pour accueillir les futurs todos
  const todos = [];
  // boucle for pour la génération de todos
  for (let i = 1; i <= nbrOfTodos; i++) {
    // création d'un objet todo
    const todo = {
      id: i,
      name: `Todo numéro ${i}`,
      completed: false,
      deleted: false,
    };
    // ajout de l'objet todo dans le tableau todos
    todos.push(todo);
  }
  // renvoi du tableau todos une fois complété
  return todos;
};

const createLi = (todo) => {
  // création d'une balise <li>
  const li = document.createElement("li");
  // ajout de la class "todo"
  li.classList.add("todo");
  // ajout de l'id "todo-${id}"
  li.id = `todo-${todo.id}`;
  // insertion du contenu html dans le <li>
  li.innerHTML = `<a class="todo__link" href='#'>${todo.name}</a>`;
  // renvoi du <li>
  return li;
};

const createUl = (todos) => {
  // création d'une balise <ul>
  const ul = document.createElement("ul");
  // ajout de la class "todos-list"
  ul.classList.add("todos-list");
  // boucle pour parcourir la liste des todos
  for (let i = 0; i < todos.length; i++) {
    // création d'un todo (à partir de la liste fournie)
    const todo = todos[i];
    // création d'un <li> (via un objet todo)
    const li = createLi(todo);
    // insertion du <li> dans le <ul>
    ul.append(li);
  }
  // renvoi du <ul>
  return ul;
};

addEventListener("load", main);

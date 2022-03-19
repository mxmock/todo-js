const main = () => {
  // selection de la div avec l'id "root"
  const root = document.getElementById("root");
  // récupérer la liste des todos
  const todos = generateTodos();
  // créer le <ul> qui contiendra la liste de todos
  const todoUl = createUl(todos);
  // insertion du <ul> dans <div id="root">
  root.append(todoUl);
};

const generateTodos = () => {
  // créer un tableau vide pour accueillir les futurs todos
  const todos = [];
  // boucle for pour la génération de todos
  for (let i = 1; i <= 10; i++) {
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
  const li = document.createElement("li");
  li.classList.add("todo");
  li.id = `todo-${todo.id}`;
  li.innerHTML = `<a class="todo__link" href='#'>${todo.name}</a>`;
  return li;
};

const createUl = (todos) => {
  const ul = document.createElement("ul");
  ul.classList.add("todos-list");

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = createLi(todo);
    ul.append(li);
  }
  return ul;
};

addEventListener("load", main);

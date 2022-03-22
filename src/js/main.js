const main = () => {
  // selection de la div avec l'id "root"
  const root = document.getElementById("root");
  // récupérer la liste des todos
  const todos = generateTodos(12);
  // créer le <ul> qui contiendra la liste de todos
  const todoUl = createTodoUl(todos);
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
      completed: i === 3 || i === 8,
      deleted: false,
    };
    // ajout de l'objet todo dans le tableau todos
    todos.push(todo);
  }
  // renvoi du tableau todos une fois complété
  return todos;
};

const switchState = (checkbox) => {
  const status = checkbox.checked;
  // const todoLabel = document.querySelector(`label[for*=${checkbox.id}]`);
  const todoLabel = checkbox.parentElement;
  status
    ? todoLabel.classList.add("todo__label--completed")
    : todoLabel.classList.remove("todo__label--completed");
};

const onCheckboxClick = (event) => {
  const checkbox = event.target;
  switchState(checkbox);
};

const createTodoCheckbox = (todo) => {
  // création d'un <label>
  const label = document.createElement("label");
  // ajout de l'attribut "for" sur le <label>
  label.setAttribute("for", `todo-${todo.id}`);
  // ajout de la class "todo__label--completed" si le todo est complété
  if (todo.completed) {
    label.classList.add("todo__label--completed");
  }
  // ajout de la class "todo__label"
  label.classList.add("todo__label");
  // ajout du texte dans le label, correspondant au nom du todo
  label.innerText = todo.name;
  // création d'un <input />
  const checkbox = document.createElement("input");
  // ajout d'un id sur l'input
  checkbox.id = `todo-${todo.id}`;
  // ajout du type "checkbox"
  checkbox.type = "checkbox";
  // définir l'état de la checkbox en fonction de l'état du todo
  checkbox.checked = todo.completed;
  // ajout de la class "todo__input" et "sr-only"
  checkbox.classList.add("todo__input", "sr-only");
  // ajout de l'event listener sur le click d'un todo
  checkbox.addEventListener("click", onCheckboxClick);
  // insertion de la checkbox dans le label
  label.append(checkbox);
  // renvoi du label
  return label;
};

const createTodoLi = () => {
  // création d'une balise <li>
  const li = document.createElement("li");
  // ajout de la class "todo"
  li.classList.add("todo");
  // renvoi du <li>
  return li;
};

const createTodoUl = (todos) => {
  // création d'une balise <ul>
  const ul = document.createElement("ul");
  // ajout de la class "todos-list"
  ul.classList.add("todos-list");
  // boucle pour parcourir la liste des todos
  for (let i = 0; i < todos.length; i++) {
    // création d'un todo (à partir de la liste fournie)
    const todo = todos[i];
    // création d'un <li>
    const todoLi = createTodoLi();
    // création d'une checkbox (via un objet todo)
    const todoCheckbox = createTodoCheckbox(todo);
    // insertion du <input type="checkbox" /> dans le <li>
    todoLi.append(todoCheckbox);
    // insertion du <li> dans le <ul>
    ul.append(todoLi);
  }
  // renvoi du <ul>
  return ul;
};

addEventListener("load", main);

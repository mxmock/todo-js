# Step 2

### Part 1

- [ ] Créer une fonction `main()`
- [ ] Déplacer la variable `root` dans la fonction `main()`
- [ ] Effacer tout le reste du code (tout ce qui est en dehors de la fonction `main()`)
- [ ] Ajouter un `addEventListener` permettant d'écouter l'événement **_'load'_**, et ayant en deuxième paramètre la fonction `main`
- [ ] Ajouter dans `main()` un `console.log(root)` et vérifier que la console affiche bien la `<div id="root">`

### Part 2

> _Nous allons créer une liste d'objets javascripts, chaque objet correspondra à un todo. Un todo sera donc un objet qui aura les propriétés suivantes: `id`, `name`, `completed`, `deleted`_

- [ ] Créer une fonction `generateTodos()` qui aura pour but de générer une liste d'objets. Cette fonction retournera donc un tableau.
- [ ] Créer une const `todos` (dans la fonction `generateTodos()`) qui sera un tableau vide.
- [ ] Créer un objet `todo` (toujours dans la fonction) avec comme propriétés un `id` qui vaut **1**, un `name` qui vaut **"Todo numéro 1"**, un état `completed` qui vaut **false** et un état `deleted` qui vaut **false**
- [ ] Envoyer cet objet `todo` dans le tableau `todos`
- [ ] Faire un `console.log(todos)` et constater dans la console que l'on retrouve bien notre tableau avec l'objet `todo` à l'intérieur
- [ ] Une fois le résultat correct obtenu, plutôt que de créer qu'un seul `todo`, faire une boucle `for` (toujours dans la fonction) bouclant 10 fois, et à chaque tour de boucle insérer un nouveau `todo` dans le tableau `todos` (donc 10 `todo` au total dans le tableau)
- [ ] Incrémenter la valeur de chacun des `id` des `todo` en fonction de la variable `i`. Pareil concernant le `name` d'un `todo`
- [ ] Ne pas oublier de renvoyer le tableau `todos` final
- [ ] Maintenant au lieu de boucler 10 fois, ajouter un paramètre `nbrOfTodos` dans la fonction `generateTodos(nbrOfTodos)`, afin de boucler autant de fois que la variable `nbrOfTodos` l'indique
- [ ] Finir par créer une constante `todos` dans la fonction `main()`, qui vaut `generateTodos(12)`.
- [ ] Faire un `console.log(todos)` pour vérifier que l'on obtient bien un tableau avec 12 objets `todo` à l'intérieur

### Part 3

> _Maintenant nous allons créer un `<label>` qui contiendra le nom du `todo` ainsi qu'un `<input type="checkbox">` permettant de cocher le `todo` lorsqu'il sera complété, la checkbox sera masquée via le css fourni. Le contenu du `<label>` sera dépendant d'un objet `todo`._

- [ ] Créer une fonction `createTodoCheckbox(todo)` avec un paramètre `todo`
- [ ] Dans cette fonction, créer une const `label` qui sera le résultat de la création d'un `<label>` via js
- [ ] Ajouter un attribut `for` sur le label, qui aura pour valeur `todo-${todo.id}`
- [ ] Ajouter sur le label la class _"todo__label"_
- [ ] Lui ajouter également une class _"todo__label--completed"_ si et seulement si `todo.completed` est __true__.
- [ ] Insérer le texte ayant pour valeur `todo.name` dans `label` via `innerText`
- [ ] Créer une nouvelle const `checkbox` qui sera le résultat de la création d'un `<input />` via js
- [ ] Ajouter un `id` à l'input ayant pour valeur `todo-${todo.id}`
- [ ] Ajouter également un `type` étant égal à _"checkbox"_
- [ ] Modifier la propriété `checked` de `checkbox` en lui attribuant la valeur `todo.completed`
- [ ] Pour finir, lui ajouter la class _"toto__input"_
- [ ] Insérer `checkbox` dans `label`
- [ ] Finir par retourner `label`

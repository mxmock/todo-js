# Step 3

### Part 1

> _Nous allons créer une fonction qui aura pour but d'ajouter ou de retirer la class `todo__label--completed` sur la balise `<label>` en fonction du status de la checkbox _(`checked=true` ou bien `checked=false`)__

- [ ] Créer une fonction `switchState(id, status)` qui aura en paramètre l'id de la checkbox cliquée ainsi que son status
- [ ] Dans cette fonction, trouver un moyen de récupérer la balise `<label>` qui contient la checkbox qui vient d'être cliquée (penser au `for` du label, qui vaut la même valeur que l'`id` de la checkbox)
- [ ] Ensuite, en fonction du status de la checkbox, ajouter ou retirer la class `todo__label--completed` au label récupéré juste avant
- [ ] On peut tester cette fonction en effectuant par exemple un appel de la fonction comme ceci: `switchState("todo-4", true)`
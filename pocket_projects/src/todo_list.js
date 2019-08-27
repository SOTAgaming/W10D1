let todos = [];

let ul = document.querySelector(".todos");
let form = document.querySelector(".add-todo-form");

export function addTodo() {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let task = form.children[0].value;
      let todoObject = {
        "done": false,
        todo: task
      };
      todos.push(todoObject);
      form.children[0].value = "";
      populateList([todoObject]);
      let storage = window.localStorage.getItem("todos");
      if (!storage) {
        storage = "[]";
      } 
      let parsed = JSON.parse(storage);
      parsed.push(todoObject);
      let stringified = JSON.stringify(parsed);
      window.localStorage.setItem("todos", stringified); 
    });
}

export function populateList(array) {
  return array.map(todo => {
    let label = document.createElement("label");
    label.innerText = todo["todo"];
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo["done"];
    let li = document.createElement("li");
    li.appendChild(label);
    li.appendChild(checkbox);
    ul.appendChild(li);
  });
}

export function checkbox (){
  ul.addEventListener('change', (e) => {
    let label = e.target.previousSibling;
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todo;
    let idx;
    for(let i = 0; i < todos.length; i++){
      if(label.innerText === todos[i]['todo']){
        todo = todos[i];
        idx = i;
        // console.log(todo);
      }
    }
    if(e.target.checked){
      todo['done'] = true;
    } else {
      todo['done'] = false;
    }
    todos[idx] = todo;
    let str = JSON.stringify(todos);
    localStorage.setItem('todos', str);
    console.log(todo);
  });
}


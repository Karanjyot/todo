window.onload = function () {
  var addbtn = document.getElementById("addBtn");
  var input = document.getElementById("inputbox");
  var toDoList = document.getElementById("toDoList");

  var todos = [];
  init();

  // display current todos for user
  function init() {
    todos = JSON.parse(localStorage.getItem("high"));

    addtodos();
  }

  // function to display todos
  function addtodos() {
    toDoList.innerHTML = "";

    for (i = 0; i < todos.length; i++) {
      // var newli = "<li>" + todos[i] + "</li>"
      var newli = document.createElement("li");

      newli.innerHTML = todos[i];

      newli.className = "listofTodos list-group-item";
      newli.id = "todo" + i;

      var btn = document.createElement("button");

      btn.innerHTML = "delete";
      btn.className = "deleteBtn btn btn-danger";
      btn.id = i;

      newli.appendChild(btn);

      toDoList.appendChild(newli);

      // remove to do

      document.getElementById(i).addEventListener("click", function () {
        console.log(this.id);

        todos.splice(this.id, 1);

        localStorage.setItem("high", JSON.stringify(todos));

        // toDoList.removeChild(newli)
        document.getElementById("todo" + this.id).remove();
      });
    }
  }

  // add a to do
  addbtn.addEventListener("click", function () {
    todos.push(input.value);
    localStorage.setItem("high", JSON.stringify(todos));

    console.log(todos);
    addtodos();
  });

  addtodos();
};


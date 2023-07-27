let allBox = document.querySelectorAll(".box");
let todobox = document.querySelector(".box");
let allTasx = document.querySelectorAll(".task");
let addTask = document.querySelector("#add-task");
let inputTodo = document.querySelector("#input-todo");

allTasx.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-draging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-draging");
  });
});

allBox.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    const task = document.querySelector(".is-draging");
    box.appendChild(task);
  });
});

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  let newTaskInput = inputTodo.value;
  if (!newTaskInput) return;

  let newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerHTML = newTaskInput;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-draging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-draging");
  });

  todobox.appendChild(newTask);
  inputTodo.value = "";
});

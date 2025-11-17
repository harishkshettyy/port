function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
        ${taskInput.value}
        <span class="delete-btn" onclick="deleteTask(this)">X</span>
    `;
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
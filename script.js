const taskInput = document.getElementById("userinput");
const addTaskbutton = document.getElementById("addTaskInput");
const taskList = document.getElementById("TaskList");

addTaskbutton.addEventListener("click", addTask);

function addTask() {
    const task = taskInput.value;
    if(task){
        taskInput.value = "";
        const taskElement = document.createElement("li");
        taskElement.textContent = task;
        taskElement.innerHTML+='<button class = deleteTask >X</button>';
        taskList.appendChild(taskElement);
    }
}

taskList.addEventListener("click", ToggleTasks);

function ToggleTasks(event) {
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("completed");
    }
}

taskList.addEventListener("click", deleteTask);

function deleteTask(event){
    if(event.target.className === "deleteTask"){
        event.target.parentElement.remove();
    }
}


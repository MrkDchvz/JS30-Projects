const todoList = document.querySelector(".todos__list");
const submitBtn = document.querySelector(".todos__input__submit");
const textInput = document.querySelector(".todos__input__text");
const todos = document.querySelector(".todos");

const taskList = localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : [];

function randomStringGenerator() {
    const characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHINJKLMNOPQRSTUVWXYZ";
    let randString = ""
    for (let i = 0; i < 7; i++) {
        randString += characters[Math.floor(Math.random() * (characters.length - 1))];
    }
    return randString;
}

function addTask() {
    if (textInput.value) {
        // Create task object 
        const taskID = {
            "id": randomStringGenerator(),
            "name" : textInput.value
        }
        // add Item to LocalStorage
        taskList.push(taskID);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        textInput.value = "";
    }
    console.log(localStorage.getItem("taskList"));
}

function loadTask() {

    if (localStorage.getItem("taskList")) {
        taskList.forEach(element => {
            if (element) {
                // Create task container
                const task = document.createElement("section");
                task.classList.add("todos__list__task");
                task.setAttribute("data-id", element.id);
        
                // Create checkbox
                const input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.classList.add("todo__list__task__checkbox");
    
                // Create p element for name
                const taskName = document.createElement("p");
                taskName.classList.add("todos__list__task__name")
                taskName.appendChild(document.createTextNode(element.name));
    
                // Create delete button
                const deleteBtn = document.createElement("button");
                deleteBtn.type = "button";
                deleteBtn.appendChild(document.createTextNode("Delete"));
                deleteBtn.classList.add("todos__list__task__delete");
                deleteBtn.addEventListener("click", deleteTask);
       
                // Append checkbox, paragraph task name, and delete button to main task container
                task.appendChild(input);
                task.appendChild(taskName);
                task.appendChild(deleteBtn);

    
                // Append the task container to task list container.
                todoList.appendChild(task);
            }
        }); 
    }

}

function deleteTask() {
    const parent = event.target.parentNode;
    const parentId = parent.dataset.id;
    taskList.forEach((element, index) => {
        if (element.id === parentId) {
            todoList.removeChild(parent);
            taskList.splice(index, 1);
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }
    })
}

todos.addEventListener("submit", addTask);

window.addEventListener("load", loadTask);

todoList.addEventListener("click", (e) => {
   
})


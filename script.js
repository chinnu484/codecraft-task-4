<input type="text" id="task-input" placeholder="Enter a task">
<button id="add-task-btn">Add Task</button>
<ul id="task-list"></ul>

<script>
let taskList = document.getElementById('task-list'); 
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let task = taskInput.value.trim();

    if (task !== "") {
        let taskItem = document.createElement('li');
        taskItem.classList.add('task');

        taskItem.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
        taskList.appendChild(taskItem);

        taskInput.value = "";

        let deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
    }
}

function deleteTask(e) {
    let taskItem = e.target.parentNode;
    taskList.removeChild(taskItem);
}
</script>
    





    



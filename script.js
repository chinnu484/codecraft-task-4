let taskList=document.getElementById('task-list');
let taskInput=document.getElementById('task-input');
let addTaskBtn=document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click',addTask);
function addTask(){
    let task=taskInput.ariaValueMax.trim();
    if(task!=="){
        let taskItem=document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML=${task} <button class="delete-btn">Delete</button>;
        taskList.appendChild(taskItem);
        taskInput.value=";
        let deleteBtn=taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click',deleteTask);
    }
}
function deleteTask(e){
    let taskItem=e.target.parentNode;
    taskList.removeChild(taskItem);
}       





    



let task = [];
const taskInput = document.getElementById('taskInput');
const tasklist = document.getElementById('tasklist');

taskInput.addEventListener('keypress', function (e){
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        taskInput.value = '';
    }
});

function addTask(description){
    task.push({ description, completed: false });
    renderTasks();
}
function deleteTask(index){
    task.splice(index, 1);
    renderTasks();
}
function toggleTask(index){
    task[index].complete = !task[index].complete;
    renderTasks();
}

function renderTasks(){
    tasklist.innerHTML = '';
    task.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = 
        `<input type = "checkbox" ${task.completed ? 'checked' : ''}
        onchange = "toggleTask(${index})">
        <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>
        ${task.description}</span>
        <button onclick="deleteTask(${index})">Delete</button>`;
        tasklist.appendChild(li);
    });
}

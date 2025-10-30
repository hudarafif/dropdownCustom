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
        // li.className = task.completed ? 'completed' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const span = document.createElement('span');
        span.textContent = task.description;
        span.style.textDecoration = task.completed ? 'line-through' : 'none';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });

        li.innerHTML = 
        `<input type = "checkbox" ${task.completed ? 'checked' : ''}
        onchange = "toggleTask(${index})">
        <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>
        ${task.description}</span>
        <button onclick="deleteTask(${index})">Delete</button>`;
        
        li.appendChild(checkbox, span, deleteButton);
        tasklist.appendChild(li);
    });
}
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
        addTask(taskDescription);
        taskInput.value = '';
    }
});

renderTasks();

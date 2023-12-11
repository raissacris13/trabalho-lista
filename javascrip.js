const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let task = [];

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const task = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(task);
  renderTasks();
}

let tasks = [];

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const task = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(task);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleTask(id) {
  tasks.forEach(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  });
  renderTasks();
}

function filterTasks(filter) {
  let filteredTasks = tasks;
  if (filter === 'pending') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }
  renderTasks(filteredTasks);
}

function renderTasks(filteredTasks = tasks) {
  taskList.innerHTML = '';

  filteredTasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task')
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function() {
      deleteTask(task.id);
    });

    const toggleButton = document.createElement('button');
    toggleButton.textContent = task.completed ? 'Desmarcar' : 'Concluir';
    toggleButton.addEventListener('click', function() {
      toggleTask(task.id);
    });

    taskElement.appendChild(taskText);
    taskElement.appendChild(deleteButton);
    taskElement.appendChild(toggleButton);
    taskList.appendChild(taskElement);
});
}
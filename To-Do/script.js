document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (input.value.trim() === '') return;

  createTaskElement(input.value);
  saveTask(input.value);

  input.value = '';
}

function createTaskElement(taskText) {
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Delete</button>
  `;

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
    removeTask(taskText);
  });

  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => createTaskElement(task));
}

function removeTask(taskToRemove) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

document.getElementById('taskInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

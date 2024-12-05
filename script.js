document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskName = document.getElementById('task-input').value;
  const deadlineDate = document.getElementById('deadline-date').value;
  const deadlineTime = document.getElementById('deadline-time').value;
  const taskType = document.getElementById('task-type').value;
  const priorityLevel = document.getElementById('priority-level').value;

  if (!taskName || !deadlineDate || !deadlineTime) {
    alert('Please fill in all fields');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  taskItem.innerHTML = `
    <span class="task-name">${taskName} (${taskType})</span>
    <span class="task-deadline">Deadline: ${deadlineDate} ${deadlineTime}</span>
    <span class="task-priority">Priority: ${priorityLevel}</span>
    <button class="delete-btn" onclick="deleteTask(event)">Delete</button>
  `;

  document.getElementById('tasks').appendChild(taskItem);

  // Clear input fields
  document.getElementById('task-input').value = '';
  document.getElementById('deadline-date').value = '';
  document.getElementById('deadline-time').value = '';
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

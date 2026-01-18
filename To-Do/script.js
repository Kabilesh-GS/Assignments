    function addTask() {
      const input = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');
      
      if (input.value.trim() === '') return;
      
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${input.value}</span>
        <button class="delete" onclick="this.parentElement.remove()">Delete</button>
      `;
      
      taskList.appendChild(li);
      input.value = '';
    }
    
    document.getElementById('taskInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
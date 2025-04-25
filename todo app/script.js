const popupbox = document.querySelector('.popup-box');
const popupoverlay = document.querySelector('.popup-overlay');
const popupbutton = document.getElementById('add-popup');
const cancelpopup = document.getElementById('cancel');
const container = document.getElementById('task-list'); 
const addtask = document.getElementById('add');
const taskInput = document.getElementById('task-input');
const previewList = document.getElementById('task-preview-list');

let previewTasks = [];


popupbutton.addEventListener('click', () => {
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
    taskInput.focus();
});


cancelpopup.addEventListener('click', () => {
    resetPopup();
});


taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const task = taskInput.value.trim();
        if (task === '') return;

        previewTasks.push(task);
        const li = document.createElement('li');
        li.textContent = task;
        previewList.appendChild(li);
        taskInput.value = '';
    }
});

addtask.addEventListener('click', function () {
    if (previewTasks.length === 0) return;

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const div = document.createElement('div');
    div.classList.add('task-container');

    
    const ul = document.createElement('ul');
    previewTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
    });

    
    const small = document.createElement('small');
    small.textContent = `Created: ${formattedDate} ${formattedTime}`;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = (event) => {
        const task = event.target.closest('.task-container');
        if (task) task.remove();
    };

   
    div.appendChild(ul);
    div.appendChild(small);
    div.appendChild(document.createElement('br'));
    div.appendChild(deleteBtn);
    container.appendChild(div);

  
    resetPopup();
});



function deleteTask(event) {
    const task = event.target.closest('.task-container');
    if (task) task.remove();
}


function resetPopup() {
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
    previewList.innerHTML = '';
    previewTasks = [];
    taskInput.value = '';
}

const popupbox = document.querySelector('.popup-box');
const popupoverlay = document.querySelector('.popup-overlay');
const popupbutton = document.getElementById('add-popup');
const cancelpopup = document.getElementById('cancel');
const container = document.getElementById('task-list'); // ✅ real container
const addtask = document.getElementById('add');
const taskInput = document.getElementById('task-input');
const previewList = document.getElementById('task-preview-list');

let previewTasks = [];

// Show popup
popupbutton.addEventListener('click', () => {
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
    taskInput.focus();
});

// Cancel popup
cancelpopup.addEventListener('click', () => {
    resetPopup();
});

// Handle Enter key → add to preview
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

    // ✅ Create container
    const div = document.createElement('div');
    div.classList.add('task-container');

    // ✅ Create new <ul> and add all previewTasks to it
    const ul = document.createElement('ul');
    previewTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
    });

    // ✅ Add timestamp
    const small = document.createElement('small');
    small.textContent = `Created: ${formattedDate} ${formattedTime}`;

    // ✅ Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = (event) => {
        const task = event.target.closest('.task-container');
        if (task) task.remove();
    };

    // ✅ Append all to container
    div.appendChild(ul);
    div.appendChild(small);
    div.appendChild(document.createElement('br'));
    div.appendChild(deleteBtn);
    container.appendChild(div);

    // ✅ Clear preview & close popup
    resetPopup();
});


// Create new task


// Delete a task
function deleteTask(event) {
    const task = event.target.closest('.task-container');
    if (task) task.remove();
}

// Reset popup fields
function resetPopup() {
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
    previewList.innerHTML = '';
    previewTasks = [];
    taskInput.value = '';
}

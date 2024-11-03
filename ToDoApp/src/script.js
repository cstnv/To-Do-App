// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskDescription = taskInput.value.trim();

    if (taskDescription === "") {
        alert("Please enter a task description.");
        return;
    }

    // Create a task object and add it to the tasks array
    const newTask = {
        description: taskDescription,
        isCompleted: false
    };
    tasks.push(newTask);

    // Clear the input and update the task list
    taskInput.value = "";
    updateTaskList();
}

// Function to update the task list display
function updateTaskList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = `task ${task.isCompleted ? "complete" : ""}`;

        const taskDescription = document.createElement("span");
        taskDescription.textContent = task.description;

        // Complete/Incomplete Button
        const completeButton = document.createElement("button");
        completeButton.textContent = task.isCompleted ? "Incomplete" : "Complete";
        completeButton.onclick = () => toggleTaskStatus(index);

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);

        // Append elements to the task item
        taskItem.appendChild(taskDescription);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Append task item to the task list
        taskList.appendChild(taskItem);
    });
}

// Function to toggle the status of a task
function toggleTaskStatus(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    updateTaskList();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

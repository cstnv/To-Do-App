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

        // Mark Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => markTaskAsComplete(index);

        // Append task description and button to task item
        taskItem.appendChild(taskDescription);
        taskItem.appendChild(completeButton);

        // Append task item to the task list
        taskList.appendChild(taskItem);
    });
}

// Function to mark a task as complete
function markTaskAsComplete(index) {
    tasks[index].isCompleted = true;
    updateTaskList();
}

let tasks = [];



function renderTasks(tasks){
    let todoList = document.querySelector("#todoList")
    todoList.innerHTML = "";

    let html = tasks.map(task => {
        return `<li ${task.completed ? 'class="strike"' : ""}>
   <p>${task.detail}</p>
   <div>
     <span data-action="delete">❎</span>
     <span data-action="complete">✅</span>
   </div>
 </li>`;
    }).join('');


    todoList.innerHTML = html;
}

function newTask(){
    // let task = document.querySelector("#todo").value;
    // tasks.push(task);
    // renderTasks(tasks);
    // document.querySelector("#todo").value = "";

    let taskInput = document.querySelector("#todo").value;
    let task = {
        detail: taskInput,
        completed: false
    };
    tasks.push(task)
    renderTasks(tasks)
    document.querySelector("#todo").value = '';
}

function removeTask(taskElement) {
    // Notice how we are using taskElement instead of document as our starting point?
    // This will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
      (task) => task.detail != taskElement.querySelector('p').innerText
    );
    taskElement.remove();
  }

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
      (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
  }

function manageTasks(e) {
    // did they click the delete or complete icon?
    console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.action === "delete") {
      removeTask(parent);
    }
    if (e.target.dataset.action === "complete") {
      completeTask(parent);
    }
  }

// let button = document.querySelector('#submitTask');
// button.addEventListener('click', function() {
//     renderTasks(tasks);
// });

document.querySelector("#todo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        newTask()
    }
})
document.querySelector("#submitTask").addEventListener("click", function(event) {
    newTask()
})
document.querySelector("#todoList").addEventListener("click", manageTasks);




function addTask(task) {
    const tasks = document.createElement("li");
    tasks.innerHTML=task;
    tasks.addEventListener("dblclick",(e)=> {
        e.target.classList.add("line");
    });
    const listEvent = document.getElementById('list-event')
    listEvent.appendChild(tasks)
}
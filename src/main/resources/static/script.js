function addTask(task) {
    const tasks = document.createElement("li");
    tasks.innerHTML=task;
    tasks.addEventListener("dblclick",(e)=> {
        e.target.classList.add("line");
    });
    const listEvent = document.getElementById('tasks')
    listEvent.appendChild(tasks)
}

const sendBtn = document.getElementsByClassName("send-button")[0];
const taskBlock = document.getElementById("task-block")
sendBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(taskBlock.value!==''){
        addTask(taskBlock.value)
        taskBlock.value=""
        taskBlock.focus()
    }
})
taskBlock.focus()

const form = document.querySelector('form');
const newTask = document.querySelector('#new-task');
const ul = document.querySelector('#items');
const completTaskUl = document.querySelector('.complete-list ul');

function createTask(event){
    event.preventDefault();
    const li = document.createElement('li');
    const input = document.createElement('input');
    const lable = document.createElement('label');
    input.type = 'checkbox';
    lable.innerText = newTask.value;
    li.appendChild(input);
    li.appendChild(lable);
    ul.appendChild(li);
    newTask.value = '';
    const checkBox = li.querySelector('input[type="checkbox"]');  
    checkBox.onclick = compleatTask;
};
function compleatTask(){
    const completTaskLi = this.parentNode;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Delete';
    completTaskLi.appendChild(deleteButton);
    const completTaskCheckBox = completTaskLi.querySelector('input[type="checkbox"]');
    completTaskCheckBox.remove();
    completTaskUl.appendChild(completTaskLi);
    const deleteButtons = completTaskLi.querySelector('.delete');
    deleteButtons.onclick = function(){
        const completTaskDeletLi = this.parentNode;
        completTaskUl.removeChild(completTaskDeletLi);
    }
};
for (let i = 0; i < ul.children.length; i++) {
    const incompletcheckBox = ul.children[i].querySelector('input[type="checkbox"]');  
    incompletcheckBox.onclick = compleatTask;
    
};
for (let i = 0; i < completTaskUl.children.length; i++) {
    const completTaskdeleteButton = completTaskUl.children[i].querySelector('.delete');
    completTaskdeleteButton.onclick = function(){
        const completTaskDeletItam = this.parentNode;
        completTaskUl.removeChild(completTaskDeletItam);
    }
    
};

form.addEventListener('submit', createTask);
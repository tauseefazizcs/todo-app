// SELECTOR
const todoInput = document.querySelector('#todo-input');
const plusBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');
// Event Listener
plusBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// FUNCTIONs
function addTodo(e){
    // prevent form from submitting
    e.preventDefault();
    if(todoInput.value!= ''){
        // creat div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo'); 
        // creat li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-li');
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);
        // check mark
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class = "fas fa-check" ></i>';
        completeBtn.classList.add('check-btn');
        todoDiv.appendChild(completeBtn);
        // delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class = "fas fa-trash" ></i>';
        deleteBtn.classList.add('delete-btn');
        todoDiv.appendChild(deleteBtn);
        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }else{
        alert('Please fill the field!')
    }
}

function deleteCheck (e){
    const item = e.target;
    // DELETE
    if(item.classList.contains('delete-btn')){
       const todo = item.parentElement;
       todo.remove();
    }

    // CHECK MARK
    if(item.classList.contains('check-btn')){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

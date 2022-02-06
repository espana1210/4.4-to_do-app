window.onload = function(){
    const form = document.querySelector("form");
    const myList = document.getElementById("todoList");
    const inputTask = document.getElementById("task");
    
    form.addEventListener("submit", function(e){
      e.preventDefault();
    
    //create newtodo tasks
    const newTodo = document.createElement("div");
    newTodo.classList.add("newTodo");
    newTodo.innerHTML = inputTask.value;
    
    //create removebutton
    const removeBtn = document.createElement("div");
    removeBtn.classList.add("cross");
    removeBtn.innerText = "Done";
    
    
    myList.appendChild(newTodo);
    newTodo.appendChild(removeBtn);
    
    form.reset();
    });
    
    //when clicked,remove task
    function remove(e){
      e.target.parentNode.remove();
    }
    myList.addEventListener("click", remove, false);
    
    }
    
    
    //localstorage
    window.onload = function(){
    var todoForm = document.getElementById('newTodoForm');
    var todoList = document.getElementById('todoList');
    
    var savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    for(var i = 0; i < savedTodos.length; i++){
    var newTodo = document.createElement('li');
    newTodo.innerText = savedTodos[i].task
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if(newTodo.isCompleted){
    newTodo.style.textDecoration = 'line-through';
            }
    todoList.appendChild(newTodo);
        }
    
    todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    var newTodo = document.createElement('li');
    var taskValue = document.getElementById('task').value;
    newTodo.innerText = taskValue;
    newTodo.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newTodo);
    
    savedTodos.push({task: newTodo.innerText, isCompleted: false});
    localStorage.setItem('todos', JSON.stringify(savedTodos));
        })
    
    todoList.addEventListener('click', function(event){
    var clickedListItem = event.target;
    
    if(!clickedListItem.isCompleted){
    clickedListItem.style.textDecoration = 'line-through';
    clickedListItem.isCompleted = true;
    } else {
    clickedListItem.style.textDecoration = 'none';
    clickedListItem.isCompleted = false;
    }
    for(var i = 0; i < savedTodos.length; i++){
    if(savedTodos[i].task === clickedListItem.innerText){
    savedTodos[i].isCompleted = clickedListItem.isCompleted;
    localStorage.setItem('todos', JSON.stringify(savedTodos));
    }
    }
    });
    }
    
    
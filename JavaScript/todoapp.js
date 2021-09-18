const form = document.querySelector("form");
const todoList = document.querySelector("#todoList");

//load from local storage
storedList = localStorage.getItem("todoList");
todoList.innerHTML = storedList;

//all this is basically the same as above
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector("#newTask");

  //Validate input
  if (newTaskInput.value == "") {
    return;
  }
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");
  newLi.innerText = newTaskInput.value;
  newButton.innerText = "Mark As Completed";

  newLi.append(newButton);
  todoList.append(newLi);
  //this thing is different cuz instead of changing the value
  //of the input to an empty string
  form.reset();
  //save to localstorage
  //localStorage
  listHTML = todoList.innerHTML;
  localStorage.setItem("todoList", listHTML);
  
});

//this is the delegation, we add the listener to the list
todoList.addEventListener("click", function(event) {
  //we check here if the clicked tag is a BUTTON or nay
  console.log(event.target.tagName);
  if (event.target.tagName === "BUTTON") {
    // IF IT BE A BUTTON REMOVE ITS MOMDAD
    // event.target.parentElement.remove();
    // console.log(event.target.parentElement);
    completedTask = event.target.parentElement;
    // completedTask.style.
    completedTask.style.textDecoration = 'line-through';
    event.target.remove();
    //update local storage list object
    localStorage.todoList = todoList.innerHTML;
  }
}); 


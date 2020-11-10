let addTask = () => {
  let task = document.querySelector('#newTask');
  let newTask = document.createElement('div');
  newTask.className = 'card';
  newTask.innerHTML = `<div class="card-body text-danger">
    <p class="card-text" contenteditable="false">${task.value}</p>
    <button class="btn btn-primary edit">Edit</button>
    <button class="btn btn-primary done">Done</button>
    <button class="btn btn-primary remove">Delete</button>
    </div>`;
  document.body.appendChild(newTask);
  task.value = '';
  document.querySelector('form').style.display = 'none'
};

document.querySelector('#showForm').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('form').style.display = 'block'
});
document.querySelector('#submitTask').addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

document.body.addEventListener('click', (e)=>{
  if(e.target.className == 'btn btn-primary done'){
    e.target.parentElement.className = 'card-body text-success'
  } else if(e.target.className == 'btn btn-primary remove'){
    e.target.parentElement.parentElement.remove();
  } else if(e.target.className == 'btn btn-primary edit'){
    let p = e.toElement.previousElementSibling;
    console.log(e.toElement.previousElementSibling);
    p.contentEditable = "true";
  }
})





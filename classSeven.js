//display todo list and simple conditional rendering
const loadToDo = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayToDO(data) )
}

loadToDo()

const displayToDO = (posts) => {
    const toDoContainer = document.getElementById('todo-container')
    toDoContainer.innerHTML = ''
    posts.forEach(post => {
        const toDoCard = document.createElement('div');
        toDoCard.innerHTML = `
        <div class='todo-card'>
        <p>${post.completed === true ?`<i class="fa-regular fa-square-check"></i>`
            :
            `<i class="fa-regular fa-circle-xmark"></i>` }  </p>
        <h1>${post.title}</h1>
        </div>
        `
        toDoContainer.appendChild(toDoCard)
    })
}
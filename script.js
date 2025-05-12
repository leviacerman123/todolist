let form = document.querySelector('form');
let malumot = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputData = document.querySelector('#text');
    let todoList = document.querySelector('.todo-list');
    let newInputData = inputData.value.trim();

    if (newInputData === '') return; 

    malumot.push(newInputData);


    let list = document.createElement('li');
    list.className = "todo-item";
    list.innerHTML = `
        <input class="checkbox" type="checkbox" />
        <span class="text">${newInputData}</span>
        <div class="icons">
            <button class="edit">✏️</button>
            <button class="deletee">🗑</button>
        </div>
    `;


    let checkbox = list.querySelector('.checkbox');
    let text = list.querySelector('.text');

    checkbox.addEventListener('change', () => {
        text.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });


    let deleteBtn = list.querySelector('.deletee');
    deleteBtn.addEventListener('click', () => {
        let index = malumot.indexOf(newInputData);
        if (index !== -1) {
            malumot.splice(index, 1); 
        }
        list.remove(); 
    });

    todoList.appendChild(list);
    inputData.value = '';
});
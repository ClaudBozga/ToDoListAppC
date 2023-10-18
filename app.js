const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-task")
const list = document.getElementById('todo-list')

input.addEventListener('input', onTypeTodo);
addButton.addEventListener('click', onAddTodo);

function onTypeTodo() {
    console.log(input.value);
    console.log(addButton.disabled);
    addButton.disabled = input.value.trim().length === 0;
    // trim taie spatiile de dinainte si de dupa
    // addButton.disabled = input.value.length === 0 ? true : false;
}

function onAddTodo() {
    // au trecut in functia createListItem
        // create li element containing value from input
        // const li = document.createElement('li');
        // li.textContent = input.value;
    // append li element to the list
    const li = createListItem(input.value);
    list.appendChild(li);
    clearInput();
}

function createListItem(name) {
    const li = document.createElement('li');
    li.textContent = input.value;

    return li;
}

function clearInput() {
    input.value = '';
    addButton.diabled = true;
}

    // style the li
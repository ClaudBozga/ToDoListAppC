# ToDoListApp

Steps:

1. HTML & CSS Starter code
    - div container
        - h1 - Todo List
        - input type text
        - button - disabled by default

2. The "Add" button must be enabled when user types in input
    - if user clears the input, the button should be disabled again
    - create 2 variables containing the input and button elements
    - add an event listener for input element (try using 'input' event -if it doesn't work properly try using 'keyup' event)
    - disabled property will be set to true when input value lenght > 0, otherwise false

3. The user should be able to add a new to do to the list
    - event listener - addButton
    - create li element containing value from input
    - append li element to list(ul)
    - add styles for li
    - clear selection from input
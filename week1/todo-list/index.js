const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const forms = $$('.todo__form');
const todoLists = $$('.todo__list');
const navigationButtons = $$('.nav__buttons');

const submitForm = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const direction = e.target.classList[1].includes('left') ? "left" : "right";
    addTodo(input,direction);
}

const addTodo = (input,direction) => {
    const todos = $$('.todo__list');
    const todoList = todos[0].classList[1].includes(direction) ? todos[0] : todos[1];
    const newTodo = document.createElement('li');

    if(input.value.match(/\S/g)){
        newTodo.innerText = input.value;
        todoList.appendChild(newTodo);
        input.value = "";
    }
}

const deleteTodoList = (e) => {
    const target = e.target;
    target.remove();
}

const toggleNavigationButtons = (e) => {
    const type = e.target.innerText;
    const leftSection = $('.section__left');
    const rightSection = $('.section__right');
    
    switch(type){
        case 'Today':
            openSection(leftSection);
            closeSection(rightSection);
            break;
        case 'Tomorrow':
            openSection(rightSection);
            closeSection(leftSection);
            break;
        default:
            restoreSection(leftSection);
            restoreSection(rightSection);
    }
}

const openSection = (section) => {
    const style = section.style;

    style.width = '100%';
    style.padding = '1rem';
    style.opacity = '1';
    style.border = 'none';
}

const closeSection = (section) => {
    const style = section.style;

    style.width = '0';
    style.padding = '0';
    style.opacity = '0';
    style.border = 'none';
}

const restoreSection = (section) => {
    const style = section.style;

    style.width = '50%';
    style.padding = '1rem';
    style.opacity = '1';
    section.classList[0].includes('left')  ? style.borderRight = '1px solid #000' : 'none';
}
    
[...forms].map((form)=>form.addEventListener('submit',submitForm));
[...todoLists].map((todoList)=>todoList.addEventListener('click',deleteTodoList));
[...navigationButtons].map((navigationButton)=>navigationButton.addEventListener('click',toggleNavigationButtons));
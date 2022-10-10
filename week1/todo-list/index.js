const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const forms = $$('.todo__form');
const todoLists = $$('.todo__list');
const navigations = $$('.nav__buttons');

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

const toggleNavigation = (e) => {
    const type = e.target.innerText;
    const leftSection = $('.section__left');
    const rightSection = $('.section__right');
    
    switch(type){
        case 'Today':
            leftSection.style.width = '100%';
            rightSection.style.width = '0';

            leftSection.style.padding = '1rem';
            rightSection.style.padding = '0';

            rightSection.style.overflow = 'hidden';
            break;
        case 'Tomorrow':
            leftSection.style.width = '0';
            rightSection.style.width = '100%';

            leftSection.style.padding = '0';
            rightSection.style.padding = '1rem';

            leftSection.style.border = 'none';
            leftSection.style.overflow = 'hidden';
            break;
        default:
            leftSection.style.width = '50%';
            rightSection.style.width = '50%';

            leftSection.style.padding = '1rem';
            rightSection.style.padding = '1rem';

            leftSection.style.borderRight = '1px solid #000';
    }
}
    
Array.from(forms).map((form)=>form.addEventListener('submit',submitForm))
Array.from(todoLists).map((todoList)=>todoList.addEventListener('click',deleteTodoList))
Array.from(navigations).map((navigation)=>navigation.addEventListener('click',toggleNavigation))
const $ = (selector) => document.querySelector(selector);

const dropDown = $('.nav__week');
const dropBox = $('.dropBox');

function toggleDropBox(){
    dropBox.style.display = dropBox.style.display === 'none' ? 'block' : 'none';
}

function changeDropDownText(e){
    const dropBoxOptions = dropBox.querySelectorAll('p');
    const dropDownText = dropDown.querySelector('.dropDown__option');

    [...dropBoxOptions].map((dropBoxOption)=>dropBoxOption.classList.remove('dropBox--selected'));
    e.target.classList.add('dropBox--selected');
    dropDownText.innerText = e.target.innerText;
}

function init(){
    dropBox.style.display = 'none';
}

dropDown.addEventListener('click',toggleDropBox);
dropBox.addEventListener('click',changeDropDownText);

init();
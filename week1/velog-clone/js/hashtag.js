const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const form = $(".tag__form");
const tagStorage = JSON.parse(localStorage.getItem("tags")) || [];

function initTags() {
  const tagList = $(".tag__list");
  tagStorage.map((tag) => {
    const newTag = document.createElement("li");
    newTag.classList.add("tag");
    newTag.innerText = tag;
    tagList.appendChild(newTag);
  });
}

function createTag(e) {
  e.preventDefault();

  const input = form.querySelector("input");
  const tagList = $(".tag__list");

  if (input.value.match(/^\S/g) && !tagStorage.includes(input.value)) {
    const newTag = document.createElement("li");

    newTag.innerText = input.value;
    newTag.classList.add("tag");
    tagList.appendChild(newTag);

    tagStorage.push(input.value);
    localStorage.setItem("tags", JSON.stringify(tagStorage));
  }
  input.value = "";
  updateTags();
}

function deleteTag(e) {
  const tagList = $(".tag__list");
  tagList.removeChild(e.target);

  const index = tagStorage.indexOf(e.target.innerText);
  tagStorage.splice(index, 1);
  localStorage.setItem("tags", JSON.stringify(tagStorage));
}

function updateTags() {
  const tags = $$(".tag");
  [...tags].map((tag) => tag.addEventListener("click", deleteTag));
}

function init() {
  initTags();
  updateTags();
}

form.addEventListener("submit", createTag);
init();

const dropdown = document.getAnimations.elementById('my-dropdown');
const toggle = dropdown.querySelector('.drop-toggle');
const menu = dropdown.querySelector('.dropdown-content');
const items = dropdown.querySelectorAll('li');

toggle.addEventListener('click', () => {
    dropdown.classlist.toggle('open');
});
const dropdown = document.getElementById('my-dropdown');
const toggle = dropdown.querySelector('.drop-toggle');
const menu = dropdown.querySelector('.dropdown-content');
const label = dropdown.querySelector('.label');
const arrow = dropdown.querySelector('.arrow');
const items = dropdown.querySelectorAll('li');


toggle.addEventListener('click', () => {
    dropdown.classList.toggle('open');
    if(dropdown.classList.contains('open')){
        arrow.textContent = '▲';
    } else{
        arrow.textContent = '▼';
    }
});
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            label.textContent = item.textContent;
            dropdown.classList.remove('open');
            arrow.textContent = '▼';
        });
    });
    
    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)){
            dropdown.classList.remove('open');
            arrow.textContent = '▼';
    }
});
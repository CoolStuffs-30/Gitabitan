const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const indicator = document.querySelector('.indicator');

function updateIndicator(el) {
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    updateIndicator(tab);

    document.querySelector('.tab-content.active').classList.remove('active');
    contents[index].classList.add('active');
    });
});

// Initialize on load
updateIndicator(document.querySelector('.tab.active'));
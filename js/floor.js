const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const indicator = document.querySelector('.indicator');
const tabsContainer = document.querySelector('.tabs');

function updateIndicator(el) {
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        // Active tab switch
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');

        // Update indicator
        updateIndicator(tab);

        // Change content
        document.querySelector('.tab-content.active').classList.remove('active');
        contents[index].classList.add('active');

        // ✅ Auto scroll to clicked tab
        tab.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    });
});

// Initialize on load
updateIndicator(document.querySelector('.tab.active'));



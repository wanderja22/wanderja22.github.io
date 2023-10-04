let modalbox = document.getElementById("modalbox");

function showModal(){
    setTimeout(() => {
        modalbox.style.display = "block";
    }, 250);
}

function closeModal(){
    modalbox.style.display = "none";
}

const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

const addToCartButtons = document.querySelectorAll('.product button');

function addToCartHandler() {
    const productName = this.previousElementSibling.previousElementSibling.innerText;
    alert(`Product ${productName} has been added to your cart!`);
}
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartHandler);
});

const colors = ['#ffcc33', '#ff6347', '#ffa500', '#ffd700', '#ff4500', '#ff69b4', '#9370db', '#00ced1', '#20b2aa'];

function getRandomColorIndex() {
    return Math.floor(Math.random() * colors.length);
}

function changeTextColor() {
    const welcomeText = document.getElementById('welcomeText');
    const randomColorIndex = getRandomColorIndex();
    const randomColor = colors[randomColorIndex];
    welcomeText.style.color = randomColor;
}
changeTextColor();

const aboutMeText = document.getElementById('aboutMeText');

function changeAboutMeTextColor() {
    const randomColorIndex = getRandomColorIndex();
    const randomColor = colors[randomColorIndex];
    aboutMeText.style.color = randomColor;
}
aboutMeText.addEventListener('click', changeAboutMeTextColor);


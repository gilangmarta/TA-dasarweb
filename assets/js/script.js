document.querySelectorAll('a[href^="#"]').forEach(anchortag => {
    anchortag.addEventListener('click', function (click) {
        click.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function welcome_alert() {
    alert("Welcome to Gilang's Website!");
}
// ...existing code...

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToHeader() {
    document.querySelector('.header').scrollIntoView({
        behavior: 'smooth'
    });
}

// ...existing code...
function agree() {
    localStorage.setItem('agreed', 'true');
    document.getElementById('agreement').style.display = 'none';
    loadPage('home');
}

function deny() {
    alert('Access denied. You must be 18+ to enter.');
}

function loadPage(page) {
    const content = document.getElementById('content');
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
            if (page === 'home') {
                startCarousel();
            }
        })
        .catch(error => {
            content.innerHTML = '<p>Error loading page. Please try again.</p>';
            console.error(error);
        });
}

function startCarousel() {
    const images = document.querySelectorAll('.carousel img');
    const buttons = document.querySelectorAll('.carousel-controls button');
    let current = 0;

    function showSlide(index) {
        images.forEach(img => img.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));
        images[index].classList.add('active');
        buttons[index].classList.add('active');
        current = index;
    }

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => {
        showSlide((current + 1) % images.length);
    }, 4000);
}

function redirect(url) {
    window.location.href = `redirect.html?url=${encodeURIComponent(url)}`;
}

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
    let current = 0;
    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 3000);
}

function redirect(url) {
    window.location.href = `redirect.html?url=${encodeURIComponent(url)}`;
}

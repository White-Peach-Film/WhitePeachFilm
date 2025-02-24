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
            } else if (page === 'token') {
                startCountUp();
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

function startCountUp() {
    const counters = document.querySelectorAll('.count-up');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / 100; // Adjust speed by changing denominator
        const updateCounter = () => {
            count += increment;
            if (count >= target) {
                counter.textContent = target.toLocaleString(); // No decimals
            } else {
                counter.textContent = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCounter);
            }
        };
        updateCounter();
    });
}

function redirect(url) {
    window.location.href = `redirect.html?url=${encodeURIComponent(url)}`;
}

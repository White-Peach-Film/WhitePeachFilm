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
        })
        .catch(error => {
            content.innerHTML = '<p>Error loading page. Please try again.</p>';
            console.error(error);
        });
}

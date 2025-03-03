let authors = []; // 存储提交的作者数据

function searchAuthor() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const results = document.getElementById('searchResults');
    results.innerHTML = '';

    const filtered = authors.filter(author => author.name.toLowerCase().includes(input));
    filtered.forEach(author => {
        results.innerHTML += `
            <div class="author-item">
                <img src="${author.img}" alt="${author.name}">
                <p>${author.name}</p>
            </div>
        `;
    });
}

// 示例数据（待用户提交后动态添加）
authors = [
    { name: "Author 1", img: "https://via.placeholder.com/80?text=A1" },
    { name: "Author 2", img: "https://via.placeholder.com/80?text=A2" }
];

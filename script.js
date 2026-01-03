document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-grad-btn');
    const viewer = document.getElementById('mainViewer');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.dataset.type === 'doc') {
                e.preventDefault();
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                viewer.src = link.dataset.src;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log("Springs Art Gallery 2026 Portal Active.");
});

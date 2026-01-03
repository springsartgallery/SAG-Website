document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-grad-btn');
    const viewer = document.getElementById('mainViewer');
    const title = document.getElementById('view-title');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if it's a viewable document link
            if (link.dataset.type === 'doc') {
                e.preventDefault();
                
                // UI: Update active state
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Logic: Update title and source
                title.innerText = link.innerText;
                viewer.src = link.dataset.src;
            }
        });
    });
});

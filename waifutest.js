function openModal(title, description) {
    document.getElementById('photoTitle').innerText = title;
    document.getElementById('photoDescription').innerText = description;
    document.getElementById('photoModal').style.display = 'flex';
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('photoModal');
    const modalContent = document.querySelector('.modal-content');
    if (event.target === modal && !modalContent.contains(event.target)) {
        modal.style.display = 'none';
    }
});

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.classList.add('drop');
            });

            link.addEventListener('mouseleave', () => {
                link.classList.remove('drop'); 
            });
        });

        const menuIcon = document.querySelector('.menu-icon');
        const navUl = document.querySelector('nav ul');

        menuIcon.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    });
})();

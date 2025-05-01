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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('nav ul li a');
        const menuIcon = document.querySelector('.menu-icon');
        const navUl = document.querySelector('nav ul');
        const backToTopButton = document.getElementById('backToTop');

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.classList.add('drop');
            });

            link.addEventListener('mouseleave', () => {
                link.classList.remove('drop'); 
            });
        });

        menuIcon.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!menuIcon.contains(event.target) && !navUl.contains(event.target)) {
                navUl.classList.remove('active');
            }
        });

        const photos = document.querySelectorAll('.photo img');

        photos.forEach(photo => {
            photo.addEventListener('click', () => {
                const afterElement = photo.parentElement.querySelector('::after');
                if (afterElement) {
                    afterElement.style.display = 'block';
                    setTimeout(() => {
                        afterElement.style.display = 'none';
                    }, 2000); 
                }
            });
        });

        const toggleBackToTopButton = () => {
            if (window.scrollY > 200) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        
        toggleBackToTopButton();

        window.addEventListener('scroll', toggleBackToTopButton);
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Generate 20 photo cards with random images
    for (let i = 1; i <= 20; i++) {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        const img = document.createElement('img');
        img.src = `https://picsum.photos/300/200?random=${i}`;
        img.alt = `Photo ${i}`;

        const button = document.createElement('button');
        button.textContent = 'Open';
        button.setAttribute('data-img-src', img.src); // Store the image source in a data attribute
        button.addEventListener('click', (event) => {
            const imgSrc = event.target.getAttribute('data-img-src'); // Retrieve the image source from the data attribute
            modalImg.src = imgSrc;
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
                modalImg.classList.add('show');
            }, 10);
        });

        photoCard.appendChild(img);
        photoCard.appendChild(button);
        gallery.appendChild(photoCard);
    }

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        modalImg.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Close the modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            modalImg.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Toggle the navigation menu on burger click
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
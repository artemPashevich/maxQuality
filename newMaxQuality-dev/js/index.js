document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const gallery = document.getElementById('gallery');
    let isGalleryOpen = false; // Initial state of the gallery

    button.addEventListener('click', function() {
        const hiddenPhotos = Array.from(gallery.querySelectorAll('.hidden'));
        hiddenPhotos.forEach(photo => {
            if (!isGalleryOpen) {
                // If the gallery is not open, we open it
                photo.style.height = '360px';
                photo.style.transform = 'scaleY(1)';
            } else {
                // If the gallery is open, we close it
                photo.style.transform = 'scaleY(0)';
                // Wait for animation to finish before setting height to 0
                setTimeout(() => {
                    photo.style.height = '0';
                }, 500);
            }
        });

        // Toggle the gallery state
        isGalleryOpen = !isGalleryOpen;

        // Change the button text based on the state
        if (isGalleryOpen) {
            button.textContent = 'View Less';
        } else {
            button.textContent = 'View More';
        }
    });
});
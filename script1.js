document.addEventListener('DOMContentLoaded', () => {

    const photoContainer = document.getElementById('photo-container');

    function triggerRandomRipple() {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        const rect = photoContainer.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        // Generate random coordinates within the image container
        const randomX = Math.random() * (rect.width - size);
        const randomY = Math.random() * (rect.height - size);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = randomX + 'px';
        ripple.style.top = randomY + 'px';
        photoContainer.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
            // Trigger the next random ripple
            triggerRandomRipple();
        });
    }

    // Trigger the first random ripple
    triggerRandomRipple();

// List of image URLs (you can replace these with your own image URLs)
        var imageUrls = [
'img1.jpg',
'img2.jpg',
'img3.jpg',
'img4.jpg',
'img5.jpg',
'img6.jpg',
'img7.jpg',
'img8.jpg',
'img9.jpg',
'img10.jpg',
'img11.jpg',
'img12.jpg',
'img13.jpg'
            // Add more image URLs here...
        ];

        // Function to create a photo element
    function createPhotoElement(imageUrl, index) {
        var img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Photo ' + (index + 1);
        img.className = 'photo';
        
        // Position them randomly

 // Set a maximum X position to ensure the right border is always visible
    var maxX = photoContainer.clientWidth - img.width - 2; // Subtract the width of the border
    var x = Math.floor(Math.random() * maxX);
    img.style.left = x + 'px';

 // Set a maximum Y position to ensure the bottom border is always visible
    var maxY = photoContainer.clientHeight - img.height - 2; // Subtract the width of the border
    var y = Math.floor(Math.random() * maxY);
        img.style.top = y + 'px';

        // Apply a falling animation
        img.style.transition = 'transform 3s, opacity 2s';
        img.style.transform = 'translateZ(' + photoContainer.clientHeight + 'px)';
        img.style.opacity = '0';

        photoContainer.appendChild(img);

        // Apply the falling animation after a random delay
        setTimeout(() => {
            img.style.transform = 'translateZ(0)';
            img.style.opacity = '1';
        }, index * 3000);
    }

    // Create and position all the photos except the final one
    imageUrls.forEach((imageUrl, index) => {
        createPhotoElement(imageUrl, index);
    });

    // Delay for the total animation duration (for example, if 10 images and each delays up to 500ms more)
    var totalDelay = imageUrls.length * 100 + 500 + 45000; // Assuming 3 seconds is the longest animation time

    // Set a timeout to add the final image
    setTimeout(() => {
        var finalImageSrc = 'img14_2.jpg'; // URL of the final image
        var img = document.createElement('img');
        img.src = finalImageSrc;
        img.alt = 'Final Photo';
        img.className = 'photo final-photo'; // Special class for the final photo
        photoContainer.appendChild(img);
    }, totalDelay);
});

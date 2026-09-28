// Create lightbox
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

const lightboxImage = document.createElement("img");
lightboxImage.classList.add("lightbox-image");

const closeButton = document.createElement("span");
closeButton.classList.add("close");
closeButton.innerHTML = "&times;";

lightbox.appendChild(closeButton);
lightbox.appendChild(lightboxImage);
document.body.appendChild(lightbox);


// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery img");

// Open lightbox when image is clicked
galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");
    });

});


// Close lightbox
closeButton.addEventListener("click", function() {
    lightbox.classList.remove("active");
});


// Close when clicking outside the image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


// Close using Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});
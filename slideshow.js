document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const items = Array.from(galleryWrapper.children);
    const prevButton = document.getElementById('gallery-prev');
    const nextButton = document.getElementById('gallery-next');
    const widthMultiplier = 0.75;
    const step = 1;
    const numItems = items.length;
    const visibleItemsCount = 3; // Number of items to show per slide
    let currentIndex = 0;

    function updateGallery() {
        const slideWidth = (100 / Math.ceil(numItems / visibleItemsCount));
        galleryWrapper.style.width = `${slideWidth * Math.ceil(numItems / visibleItemsCount)}%`;
        galleryWrapper.style.transform = `translateX(-${(currentIndex * slideWidth)*6}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + step) % Math.ceil(numItems / visibleItemsCount);
        updateGallery();
    }
    
    function showPrev() {
        currentIndex = (currentIndex - step + Math.ceil(numItems / visibleItemsCount)) % Math.ceil(numItems / visibleItemsCount);
        updateGallery();
    }

    // Set up event listeners
    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Initialize the gallery
    updateGallery();

    // Optional: Set up auto-scroll every 30 seconds
    setInterval(showNext, 30000);
});

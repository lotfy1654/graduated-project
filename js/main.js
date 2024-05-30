document.addEventListener("DOMContentLoaded", function () {
    // Attach click event to each card to update modal video source
    let cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            let videoUrl = card.getAttribute('data-video'); // Get video URL from data attribute
            document.getElementById('modalVideoSource').setAttribute('src', videoUrl); // Set modal video source
            document.getElementById('modalVideo').load(); // Reload the modal video
        });
    });
});
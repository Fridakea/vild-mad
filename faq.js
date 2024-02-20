document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const overlay = document.querySelector('.overlay');

    boxes.forEach(box => {
        box.addEventListener('click', function (event) {
            event.stopPropagation(); // Forhindrer klikhændelser på boksen i at sprede sig til parent-elementer
            toggleOverlay();
        });
    });

    // Luk overlay, når der klikkes uden for boksen eller overlayet
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.box') && !event.target.closest('.overlay-content')) {
            closeOverlay();
        }
    });

    function toggleOverlay() {
        overlay.classList.toggle('active'); // Skifter mellem tilføjelse og fjernelse af 'active' klasse på overlay
    }

    function closeOverlay() {
        overlay.classList.remove('active'); // Fjerner 'active' klasse fra overlay
    }
});

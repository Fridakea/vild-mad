document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const overlays = document.querySelectorAll('.overlay');
    const overlayContents = document.querySelectorAll('.overlay-content');

    boxes.forEach((box, index) => {
        box.addEventListener('click', function (event) {
            event.stopPropagation(); 
            const text = box.querySelector('.text').innerHTML;
            toggleOverlay(overlays[index]); 
            updateOverlayContent(overlayContents[index], text); 
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', function (event) {
     
            if (event.target === overlay) {
                closeOverlay(overlay);
            }
        });
    });

    function toggleOverlay(overlay) {
        overlay.classList.toggle('active');
    }

    function closeOverlay(overlay) {
        overlay.classList.remove('active');
    }

    function updateOverlayContent(overlayContent, text) {
        overlayContent.innerHTML = text;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const overlays = document.querySelectorAll('.overlay');
    const overlayContents = document.querySelectorAll('.overlay-content');
    let activeOverlay = null;

    boxes.forEach((box, index) => {
        box.addEventListener('click', function (event) {
            event.stopPropagation(); 
            const text = box.querySelector('.text').innerHTML;
            if (activeOverlay === overlays[index]) {
                closeOverlay(activeOverlay);
                activeOverlay = null;
            } else {
                if (activeOverlay) {
                    closeOverlay(activeOverlay);
                }
                toggleOverlay(overlays[index]); 
                updateOverlayContent(overlayContents[index], text); 
                activeOverlay = overlays[index];
            }
        });
    });
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeOverlay(overlay);
      }
    });
  });

  document.addEventListener("click", function (event) {
    overlays.forEach((overlay) => {
      if (!event.target.closest(".box") && !event.target.closest(".overlay-content")) {
        closeOverlay(overlay);
      }
    });
  });

  function toggleOverlay(overlay) {
    overlay.classList.toggle("active");
  }

  function closeOverlay(overlay) {
    overlay.classList.remove("active");
  }

  function updateOverlayContent(overlayContent, text) {
    overlayContent.innerHTML = text;
  }
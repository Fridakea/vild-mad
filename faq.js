document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const overlays = document.querySelectorAll('.overlay');
    const overlayContents = document.querySelectorAll('.overlay-content');
    let activeOverlay = null;

    boxes.forEach((box, index) => {
        console.log("Box:", box);
        const textElement = box.querySelector('.text');
        console.log("Text Element:", textElement);
        box.addEventListener('click', function (event) {
            event.stopPropagation();
            if (textElement) {
                const text = textElement.innerHTML;
                if (activeOverlay === overlays[index]) {
                    closeOverlay(activeOverlay);
                    activeOverlay = null;
                } else {
                    closeOverlay(activeOverlay);
                    toggleOverlay(overlays[index]);
                    updateOverlayContent(overlayContents[index], text);
                    activeOverlay = overlays[index];
                }
            } else {
                console.error('No element with class ".text" found in the box.');
            }
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closeOverlay(overlay);
                activeOverlay = null;
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.box') && !event.target.closest('.overlay-content')) {
            closeOverlay(activeOverlay);
            activeOverlay = null;
        }
    });

    function toggleOverlay(overlay) {
        overlay.classList.add('active');
    }

    function closeOverlay(overlay) {
        if (overlay) {
            overlay.classList.remove('active');
        }
    }

    function updateOverlayContent(overlayContent, text) {
        overlayContent.innerHTML = text;
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//   const boxes = document.querySelectorAll('.box');
//   const overlays = document.querySelectorAll('.overlay');
//   const overlayContents = document.querySelectorAll('.overlay-content');
//   let activeOverlay = null;

//   boxes.forEach((box, index) => {
//       box.addEventListener('click', function (event) {
//           event.stopPropagation(); 
//           const text = box.querySelector('.text').innerHTML;
//           if (activeOverlay === overlays[index]) {
//               closeOverlay(activeOverlay);
//               activeOverlay = null;
//           } else {
//               closeOverlay(activeOverlay);
//               toggleOverlay(overlays[index]); 
//               updateOverlayContent(overlayContents[index], text); 
//               activeOverlay = overlays[index];
//           }
//       });
//   });

//   overlays.forEach(overlay => {
//     overlay.addEventListener('click', function (event) {
//         if (event.target === overlay) {
//             closeOverlay(overlay);
//             activeOverlay = null; // Reset activeOverlay when the overlay is closed
//         }
//     });
// });

//   document.addEventListener('click', function (event) {
//       if (!event.target.closest('.box') && !event.target.closest('.overlay-content')) {
//           closeOverlay(activeOverlay);
//           activeOverlay = null;
//       }
//   });

//   function toggleOverlay(overlay) {
//       overlay.classList.add('active');
//   }

//   function closeOverlay(overlay) {
//       if (overlay) {
//           overlay.classList.remove('active');
//       }
//   }

//   function updateOverlayContent(overlayContent, text) {
//       overlayContent.innerHTML = text;
//   }
// });

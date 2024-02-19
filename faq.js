document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            boxes.forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.box')) {
            boxes.forEach(box => {
                box.classList.remove('active');
            });
        }
    });
});

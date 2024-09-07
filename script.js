document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        const content = header.nextElementSibling;
        content.classList.toggle('show');
        document.querySelectorAll('.accordion-content').forEach((item) => {
            if (item !== content) {
                item.classList.remove('show');
            }
        });
        document.querySelectorAll('.accordion-header').forEach((item) => {
            if (item !== header) {
                item.classList.remove('active');
            }
        });
    });
});

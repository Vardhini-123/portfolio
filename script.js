let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Offset for active section highlighting
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Corrected: getAttribute('id')

        if (top >= offset && top < offset + height) { // Use >= for better accuracy
            navLinks.forEach(link => { // Renamed for clarity
                link.classList.remove('active');
            });
            // Ensure the link exists before trying to add class
            let correspondingNavLink = document.querySelector('header nav a[href*=' + id + ']');
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
        }
    });

    // Optional: Hide menu icon/navbar when scrolling after interaction
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
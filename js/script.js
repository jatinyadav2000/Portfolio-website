// toggle icon navbar
let menuIcon = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');
}


// smooth scrolling
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (window.scrollY >= offset && window.scrollY < offset + height) {
            // remove 'active' class from all navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // add 'active' class to the corresponding navbar link
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }

        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when cLick navbar Links (scroll)

    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);
};
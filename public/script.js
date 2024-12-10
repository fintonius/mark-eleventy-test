document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const projects = document.getElementById('projects');
    const projectsClick = document.getElementById('projectsClick');
    const projectLinks = document.getElementById('projectLinks');
    const otherLinks = document.querySelectorAll('#pageLinks > .links:not(#projects)');

    projects.addEventListener('mouseenter', function () {
        const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement
        otherLinks.forEach(link => {
            link.style.transform = `translateY(${submenuHeight}px)`;
        });
    });

    projects.addEventListener('mouseleave', function () {
        otherLinks.forEach(link => {
            link.style.transform = 'translateY(0)';
        });
    });

    projectsClick.addEventListener('click', function() {
        // alert('Text clicked!');
        projectLinks.style.transform = 'translateX(0)';
        overlay.classList.add("active");
    })
    overlay.addEventListener('click', function() {
        // alert('overlay clicked');
        projectLinks.style.transform = 'translateX(-220px)';
        overlay.classList.remove("active");
    })
}); 
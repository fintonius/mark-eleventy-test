document.addEventListener('DOMContentLoaded', function () {
    const projects = document.getElementById('projects');
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
});
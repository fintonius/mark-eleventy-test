document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const projects = document.getElementById('projects');
    const projectsClick = document.getElementById('projectsClick');
    const projectLinks = document.getElementById('projectLinks');
    const otherLinks = document.querySelectorAll('#pageLinks > .links:not(#projects)');
    let viewportWidth = document.documentElement.clientWidth;

    window.addEventListener('resize', () => {
        console.log(viewportWidth)
        viewportWidth = document.documentElement.clientWidth;
    })

    projectsClick.addEventListener('mouseenter', function () {
        if (viewportWidth > 780) {
                console.log('this is mouseEnter: ', viewportWidth)
                const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement
                otherLinks.forEach(link => {
                    link.style.transform = `translateY(${submenuHeight}px)`;
                });
        } else if (viewportWidth <= 780) {
            projectLinks.style.transform = 'translateX(0)';
            projectLinks.style.opacity = '1';
            projectLinks.style.visibility = 'visible';
            overlay.classList.add("active");

        }
    });

    projectsClick.addEventListener('mouseleave', function () {
       if (viewportWidth > 780) {
            otherLinks.forEach(link => {
                link.style.transform = 'translateY(0)';
            });
        }
    });

    projectsClick.addEventListener('click', function() {
        console.log(viewportWidth)
        if (viewportWidth < 780) {            
            projectLinks.style.transform = 'translateX(0)';
        }
        overlay.classList.add("active");
    });

    overlay.addEventListener('click', function() {
        if (viewportWidth < 780) {
            projectLinks.style.transform = 'translateX(-220px)';
        }
        overlay.classList.remove("active");
    });
}); 
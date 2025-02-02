const overlay = document.getElementById('overlay');
const projects = document.getElementById('projects');
const projectsClick = document.getElementById('projectsClick');
const projectLinks = document.getElementById('projectLinks');
const otherLinks = document.querySelectorAll('#pageLinks > .links:not(#projects)');
let viewportWidth;

function addClick() {
    const clickable = document.querySelector('.clickable');
    
    clickable.removeEventListener('mouseenter', handleEnter);
    clickable.removeEventListener('mouseleave', handleLeave);
    clickable.addEventListener('click', handleClick);
};

function handleClick() {
    projectLinks.style.transform = 'translateX(0)';
    overlay.classList.add("active");
}

function handleEnter() {
    const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement

    otherLinks.forEach(link => {
        link.style.transform = `translateY(${submenuHeight}px)`;
    });
};

function handleLeave() {
    otherLinks.forEach(link => {
        link.style.transform = 'translateY(0)';
    });
}

function addHover() {
    const hoverable = document.querySelector('.hoverable');

    hoverable.removeEventListener('click', handleClick);
    hoverable.addEventListener('mouseenter', handleEnter);
    hoverable.addEventListener('mouseleave', handleLeave);
};

window.addEventListener('resize', () => {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth <= 780) {
        projects.classList.add('clickable');
        projects.classList.remove('hoverable');
        addClick()
    } else {
        projects.classList.add('hoverable');
        projects.classList.remove('clickable');
        addHover()
    };
});

document.addEventListener('DOMContentLoaded', function () {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth <= 780) {
        projects.classList.add('clickable');
        projects.classList.remove('hoverable');
        addClick()
    } else {
        projects.classList.add('hoverable');
        projects.classList.remove('clickable');
        addHover()
    }

    overlay.addEventListener('click', function() {
        if (viewportWidth < 780) {
            projectLinks.style.transform = 'translateX(-250px)';
        }
        overlay.classList.remove("active");
    });
});


 // console.log('this is viewport w: ', viewportWidth)

    // projectsHover.addEventListener("click", function(event) {
    //     if (event.target.id === "projectsClick") {
    //       console.log("Clicked #projectsClick");
    //         projectsClick.addEventListener('click', function() {
    //         if (viewportWidth <= 780) {            
    //             projectLinks.style.transform = 'translateX(0)';
    //         }
    //         overlay.classList.add("active");
    //     });
    //     }
    //   });

    //   projectsHover.addEventListener('mouseenter', function () {
    //         if (viewportWidth > 780) {
    //                 console.log('this is mouseEnter: ', viewportWidth)
    //                 const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement
    //                 otherLinks.forEach(link => {
    //                     link.style.transform = `translateY(${submenuHeight}px)`;
    //                 });
    //         } else if (viewportWidth <= 780) {
    //             projectLinks.style.transform = 'translateX(0)';
    //             projectLinks.style.opacity = '1';
    //             projectLinks.style.visibility = 'visible';
    //             overlay.classList.add("active");
    
    //         }
    //     });
    // projectsHover.addEventListener('mouseleave', function () {
    //    if (viewportWidth > 780) {
    //         otherLinks.forEach(link => {
    //             link.style.transform = 'translateY(0)';
    //         });
    //     }
    // });
    // the problem is this only fires when the window resizes
    // window.addEventListener('resize', () => {
    //     // console.log(viewportWidth)
    //     viewportWidth = document.documentElement.clientWidth;
    //     if (viewportWidth > 780) {
    //         console.log('this is mouseEnter: ', viewportWidth)
    //         projectsHover.addEventListener('mouseenter', function () {
                
    //             const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement
    //             otherLinks.forEach(link => {
    //                 link.style.transform = `translateY(${submenuHeight}px)`;
    //             });
    //         })
        
    //         projectsHover.addEventListener('mouseleave', function () {
    //             if (viewportWidth > 780) {
    //                  otherLinks.forEach(link => {
    //                      link.style.transform = 'translateY(0)';
    //                  });
    //              }
    //          });
    //     }
    // })

    // projectsHover.addEventListener('mouseenter', function () {
    //     if (viewportWidth > 780) {
    //             console.log('this is mouseEnter: ', viewportWidth)
    //             const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement
    //             otherLinks.forEach(link => {
    //                 link.style.transform = `translateY(${submenuHeight}px)`;
    //             });
    //     } else if (viewportWidth <= 780) {
    //         projectLinks.style.transform = 'translateX(0)';
    //         projectLinks.style.opacity = '1';
    //         projectLinks.style.visibility = 'visible';
    //         overlay.classList.add("active");

    //     }
    // });

    // projectsHover.addEventListener('mouseleave', function () {
    //    if (viewportWidth > 780) {
    //         otherLinks.forEach(link => {
    //             link.style.transform = 'translateY(0)';
    //         });
    //     }
    // });

//     projectsClick.addEventListener('click', function() {
//         console.log(viewportWidth)
//         if (viewportWidth <= 780) {            
//             projectLinks.style.transform = 'translateX(0)';
//         }
//         overlay.classList.add("active");
//     });

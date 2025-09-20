const overlay = document.getElementById('overlay');
const projects = document.getElementById('projects');
const projectsClick = document.getElementById('projectsClick');
const projectLinks = document.getElementById('projectLinks');
const otherLinks = document.querySelectorAll('#pageLinks > .links:not(#projects)');

// NAV-BAR ARROWS FOR HOME PAGE LINKS
// - need to calculate x: current viewportWidth 
// - need to calculate y: current total width of image links + sidebar
// will just calculating width of <main> be enough?
// need to remove resizing of images 
// - need to calculate difference between x & y and when y > x

// - use window.addEventListener('resize', function() {}) to determine the widths of x & y and then trigger functions depending on if x > y or not
// window.addEventListener('resize', (e) => {
//     let viewportWidth = document.documentElement.clientWidth;

//     let projectBody = document.getElementById('projectBody').scrollWidth
//     console.log('this is projectbody', projectBody)
//     console.log('this is viewport,', viewportWidth)
// })

// HOME PAGE NAVIGATION ARROWS
document.querySelectorAll('.category').forEach(row => {

    const container = row.querySelector('.home-page-content');
    const leftArrow = row.querySelector('.left-arrow');
    const rightArrow = row.querySelector('.right-arrow');

    function isOverFlowing(element) {    
        return element.scrollWidth > element.clientWidth;
    }

    leftArrow.addEventListener('click', () => {
        container.scrollBy({ left: -400, behavior: "smooth" });
    })
    rightArrow.addEventListener('click', () => {
        container.scrollBy({ left: 400, behavior: "smooth" });
    })

    window.addEventListener('resize', () => {
        if (isOverFlowing(container)) {
            leftArrow.style.display = 'inline';
            rightArrow.style.display = 'inline';
        } else {
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'none';
        }

    })
})





















// SIDEBAR DROP-DOWN MENU - probably defunct now
// Configuring the links drop-down menu opening/closing animation
// function addClick() {
//     const clickable = document.querySelector('.clickable');
    
//     clickable.removeEventListener('mouseenter', handleEnter);
//     clickable.removeEventListener('mouseleave', handleLeave);
//     clickable.addEventListener('click', handleClick);
// };

// function handleClick() {
//     projectLinks.style.transform = 'translateX(0)';
//     overlay.classList.add("active");
// }

// function handleEnter() {
//     const submenuHeight = projectLinks.scrollHeight; // Use scrollHeight for accurate measurement

//     otherLinks.forEach(link => {
//         link.style.transform = `translateY(${submenuHeight}px)`;
//     });
// };

// function handleLeave() {
//     otherLinks.forEach(link => {
//         link.style.transform = 'translateY(0)';
//     });
// }

// function addHover() {
//     const hoverable = document.querySelector('.hoverable');

//     hoverable.removeEventListener('click', handleClick);
//     hoverable.addEventListener('mouseenter', handleEnter);
//     hoverable.addEventListener('mouseleave', handleLeave);
// };

// // configuring the links drop-down menu for use on mobile or desktop
// window.addEventListener('resize', () => {
//     if (viewportWidth <= 780) {
//         projects.classList.add('clickable');
//         projects.classList.remove('hoverable');
//         addClick()
//     } else {
//         projects.classList.add('hoverable');
//         projects.classList.remove('clickable');
//         addHover()
//     };
// });

// document.addEventListener('DOMContentLoaded', function () {
//     if (viewportWidth <= 780) {
//         projects.classList.add('clickable');
//         projects.classList.remove('hoverable');
//         addClick()
//     } else {
//         projects.classList.add('hoverable');
//         projects.classList.remove('clickable');
//         addHover()
//     }

//     overlay.addEventListener('click', function() {
//         if (viewportWidth < 780) {
//             projectLinks.style.transform = 'translateX(-250px)';
//         }
//         overlay.classList.remove("active");
//     });
// });

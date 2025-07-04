const toggler = document.querySelector('.navbar-toggler');
const togglerIcon = toggler.querySelector('#navbar-toggle-icon');
const closeIcon = toggler.querySelector('#close-icon');
const navbarCollapse = document.getElementById('navbarNav');

// Toggle icon switch
navbarCollapse.addEventListener('show.bs.collapse', function () {
    togglerIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none');
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
    togglerIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
});

// Close navbar on link OR button click (mobile only)
const collapseCloseTargets = navbarCollapse.querySelectorAll('.nav-link, .custom-btn');

collapseCloseTargets.forEach(function (el) {
    el.addEventListener('click', function () {
        if (window.getComputedStyle(toggler).display !== 'none' && navbarCollapse.classList.contains('show')) {
            toggler.click(); // Close menu
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const phrases = ["Marketing", "Deployment", "Mobile App", "Social Media"];
    const animatedText = document.getElementById('animated-text');
    let idx = 0;
    if (animatedText) {
        setInterval(() => {
            animatedText.style.opacity = 0;
            setTimeout(() => {
                idx = (idx + 1) % phrases.length;
                animatedText.textContent = phrases[idx];
                animatedText.style.opacity = 1;
            }, 400);
        }, 2000);
    }
});

window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 400);
    }
});

// Counter Animation
var counters = document.querySelectorAll('.counter');

function startCounting(counter) {
    var target = parseInt(counter.getAttribute('data-target'));
    var count = 0;
    var increment = target / 100; // Smoother animation

    var interval = setInterval(function() {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
        } else {
            counter.innerText = target;
            clearInterval(interval);
        }
    }, 20);
}

var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target); // Only run once
        }
    });
}, { threshold: 0.5 });

counters.forEach(function(counter) {
    observer.observe(counter);
});


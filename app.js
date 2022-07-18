window.addEventListener("load", (event) => {
    const body = document.querySelector('body');
    const loader = document.querySelector('.loader');

    body.style.overflow = 'scroll';
    body.style.overflowX = 'hidden';
    loader.classList.add('loaderFadeOut');
});

window.addEventListener("DOMContentLoaded", (event) => {
    const toggle = document.querySelector('.toggle');
    const topbar = document.querySelector('.topbar');
    const navigation = document.querySelector('.navigation');
    const main = document.querySelector('.main');
    const options = document.querySelectorAll('.option');
    const contactForm = document.querySelector('.contactForm');
    const messageForm = document.querySelector('.message');
    const navLinks = document.querySelectorAll('#navLink');
    const themeSwitch = document.querySelector('.themeSwitch');
    const body = document.querySelector('body');
    const logo = document.querySelector('.logo img');

    for(let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', () => {
            for(let i = 0; i < options.length; i++) {
                options[i].classList.remove('active');
            }
        })
        options[i].onclick = () => {
            options[i].classList.add('active');
        }
    }

    toggle.onclick = () => {
        toggle.classList.toggle('active');
        topbar.classList.toggle('active');
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    };

    window.addEventListener('scroll', () => {
        let checkScroll = window.scrollY;
        let reveals = document.querySelectorAll('.reveal');

        if(checkScroll > 0 && body.classList.value === '') {
            topbar.classList.add('topBarShadow');
        } else {
            topbar.classList.remove('topBarShadow');
        }

        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 150;

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }else {
                reveals[i].classList.remove('active');
            }
        }
    })

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const hideMessage = () => {
            messageForm.style.opacity = '0';
        }

        emailjs.sendForm('service_2r0jfkb', 'template_5vgpfmc', '.contactForm')
            .then(function() {
                contactForm.reset();
                messageForm.style.opacity = '1';
                setTimeout(hideMessage, 7000);
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            if(window.innerWidth < 992) {
                const hide = () => {
                    toggle.classList.remove('active');
                    topbar.classList.remove('active');
                    navigation.classList.remove('active');
                    main.classList.remove('active');
                }
                setTimeout(hide, 500);
            };
        })
    }

    themeSwitch.onclick = () => {
        body.classList.toggle('dark');
        topbar.classList.remove('topBarShadow');
        if(body.classList.value === '') {
            logo.src='logo-black.png';
        } else {
            logo.src='logo-white.png';
        }
    }
});
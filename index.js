        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                const mobileNav = document.getElementById('mobile-nav');
                if (mobileNav && mobileNav.classList.contains('open')) {
                    mobileNav.classList.remove('open');
                    document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
                }
            });
        });

        const announcementBar = document.getElementById('announcement-bar');
        const nav = document.querySelector('nav');
        const navToggle = document.getElementById('nav-toggle');
        const mobileNav = document.getElementById('mobile-nav');
        let lastScrollTop = 0;

        function updateScrollBehavior() {
            if (window.innerWidth > 420) {
                announcementBar.classList.remove('hide-announcement');
                nav.classList.remove('announcement-hidden');
                return;
            }

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 20) {
                announcementBar.classList.add('hide-announcement');
                nav.classList.add('announcement-hidden');
            } else if (scrollTop < lastScrollTop) {
                announcementBar.classList.remove('hide-announcement');
                nav.classList.remove('announcement-hidden');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }

        window.addEventListener('scroll', updateScrollBehavior);
        window.addEventListener('resize', updateScrollBehavior);

        if (navToggle && mobileNav) {
            navToggle.addEventListener('click', () => {
                const isOpen = mobileNav.classList.toggle('open');
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            });
        }
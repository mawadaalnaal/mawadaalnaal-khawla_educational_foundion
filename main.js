document.addEventListener('DOMContentLoaded', function() {
    // القائمة المنسدلة للجوال
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // تأثير التمرير على الهيدر
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // تأثيرات التمرير على الأقسام
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('.section, .hero, .contact-section, footer');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('animated');
                
                // تأثيرات خاصة لكل قسم
                if (section.id === 'hero') {
                    document.querySelector('.hero-content').classList.add('animated');
                }
                
                if (section.id === 'achievements') {
                    const cards = document.querySelectorAll('.card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animated');
                        }, index * 200);
                    });
                }
                
                if (section.id === 'courses') {
                    const items = document.querySelectorAll('.courses-list li');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animated');
                        }, index * 150);
                    });
                }
                
                if (section.id === 'about-owner') {
                    setTimeout(() => {
                        document.querySelector('.owner-image').classList.add('animated');
                        document.querySelector('.owner-bio').classList.add('animated');
                    }, 300);
                }
                
                if (section.id === 'contact') {
                    const socialLinks = document.querySelectorAll('.social-link');
                    socialLinks.forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('animated');
                        }, index * 200);
                    });
                }
            }
        });
    };

    // تشغيل مرة عند التحميل
    animateOnScroll();
    
    // ثم عند كل تمرير
    window.addEventListener('scroll', animateOnScroll);

    // تأثير النقر على الأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // تأثير النقر
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
            
            // الانتقال للسكشن المطلوب
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // إضافة السنة الحالية في الفوتر
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

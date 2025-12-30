
let ToggleBtn = document.querySelector('#theme-toggle-button');
let HtmlTag = document.querySelector('html');
let BackBtn = document.querySelector('#scroll-to-top');
let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('a[role="menuitem"]');  
let SettingBtn = document.querySelector('#settings-toggle');
let settingsMenu = document.querySelector('#settings-sidebar');
let closeSettings = document.querySelector('#close-settings');
let mobileMenuBtn = document.querySelector('.mobile-menu');
let Menu = document.querySelector('.nav-links');
let colorGrid = document.querySelector('#theme-colors-grid');
let fontOption = document.querySelectorAll('.font-option');
let body = document.querySelector('body');
let resetSettingsBtn = document.querySelector('#reset-settings');
let currentFont;
let portfolioFilter = document.querySelectorAll('.portfolio-filter');
let portfolioItem = document.querySelectorAll('.portfolio-item');

let SubmitBtn = document.querySelector('#submit-button');
let fullNameInput = document.querySelector('#full-name');
let emailInput = document.querySelector('#email');
let projectDetailsInput = document.querySelector('#project-details');

let customSelects = document.querySelectorAll('.custom-select');
let customOptions = document.querySelectorAll('.custom-options');



let colorThemes = [
    { title: 'Purple Blue', primary: '#6366f1', secondary: '#8b5cf6', accent: '#a855f7', gradient: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))' },
    { title: 'Pink Orange', primary: '#ec4899', secondary: '#f97316', accent: '#fb923c', gradient: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22))' },
    { title: 'Green Emerald', primary: '#10b981', secondary: '#059669', accent: '#34d399', gradient: 'linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105))' },
    { title: 'Blue Cyan', primary: '#3b82f6', secondary: '#06b6d4', accent: '#22d3ee', gradient: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212))' },
    { title: 'Red Rose', primary: '#ef4444', secondary: '#f43f5e', accent: '#fb7185', gradient: 'linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 63, 94))' },
    { title: 'Amber Orange', primary: '#f59e0b', secondary: '#ea580c', accent: '#fbbf24', gradient: 'linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12))' }
];

colorThemes.forEach((theme) => {
    let button = document.createElement('button');
    button.className = 'w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm';
    button.title = theme.title;
    button.setAttribute('data-primary', theme.primary);
    button.setAttribute('data-secondary', theme.secondary);
    button.setAttribute('data-accent', theme.accent);
    button.style.background = theme.gradient;
    colorGrid.appendChild(button);
});

let themeColors = document.querySelectorAll('#theme-colors-grid button');

let testimonialsCarousel = document.querySelector('#testimonials-carousel')
let nextBtn = document.querySelector('#next-testimonial')
let prevBtn = document.querySelector('#prev-testimonial')
let carousel = document.querySelectorAll('.carousel-indicator')
let currentCarouselIndex = 0

defaultSettings();
displayCarousel(0);

ToggleBtn.addEventListener('click', function() {
    HtmlTag.classList.toggle('dark');
});

window.addEventListener('scroll', function() {
    let currentId = '';
    
    for (let i = 0; i < sections.length; i++) {
        let sectionTop = sections[i].offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            currentId = sections[i].getAttribute('id');
        }
    }
    
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
        if (navLinks[i].getAttribute('href').includes(currentId)) {
            navLinks[i].classList.add('active');
        }
    }

    if (window.scrollY >= 400) {
        BackBtn.classList.remove('opacity-0', 'invisible');
    } else {
        BackBtn.classList.add('opacity-0', 'invisible');
    }
});

BackBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


SettingBtn.addEventListener('click', function() {
    if (settingsMenu.classList.contains('translate-x-full')) {
        SettingBtn.style.right = '20rem';
        settingsMenu.classList.remove('translate-x-full');
        settingsMenu.classList.add('translate-x-0');
    } else {
        SettingBtn.style.right = '0rem';
        settingsMenu.classList.remove('translate-x-0');
        settingsMenu.classList.add('translate-x-full');
    }
});

closeSettings.addEventListener('click', function() {
    SettingBtn.style.right = '0rem';
    settingsMenu.classList.remove('translate-x-0');
    settingsMenu.classList.add('translate-x-full');
});


mobileMenuBtn.addEventListener('click', function() {
    Menu.classList.toggle('active');
});

function carouselStep(step){
    currentCarouselIndex += step
    if(currentCarouselIndex<0){
        currentCarouselIndex = 3
    }else if(currentCarouselIndex>3){
        currentCarouselIndex = 0
    }
    let translateValue = window.innerWidth < 768 ? 100 * currentCarouselIndex : ((100/3) * currentCarouselIndex);
    testimonialsCarousel.style.setProperty('transform' , `translateX(${translateValue}%)`)
}


function displayCarousel(element){
    carousel[element].classList.add('active' , 'scale-125' ,'bg-accent')
    carousel[element].classList.remove('bg-slate-400', 'dark:bg-slate-600')
}


function clearCarousel(){
    for(let i = 0 ; i < carousel.length ; i++){
        carousel[i].classList.remove('active' , 'scale-125' , 'bg-accent')
        carousel[i].classList.add('bg-slate-400', 'dark:bg-slate-600')
    }
}

nextBtn.addEventListener('click' , function(){
    carouselStep(1)
    clearCarousel()
    displayCarousel(currentCarouselIndex)
})
prevBtn.addEventListener('click' , function() {
    carouselStep(-1)
    clearCarousel()
    displayCarousel(currentCarouselIndex)

})


for(let i = 0 ; i < carousel.length ; i++){
    carousel[i].addEventListener('click' , function(e){

        clearCarousel()
        currentCarouselIndex = Number(carousel[i].getAttribute('data-index'))
        let translateValue = window.innerWidth < 768 ? 100 * currentCarouselIndex : ((100/3) * currentCarouselIndex);
        testimonialsCarousel.style.setProperty('transform' , `translateX(${translateValue}%)`)
        if(carousel[i].contains(e.target)){
            displayCarousel(i)
        }
    })
}


for (let i = 0; i < portfolioFilter.length; i++) {
    portfolioFilter[i].addEventListener('click', function(e) {
        clearPortfolioFilter();
        displayPortfolioItem(portfolioFilter[i].getAttribute('data-filter'));
        
        if (portfolioFilter[i].contains(e.target)) {
            portfolioFilter[i].setAttribute('class', 'portfolio-filter px-8 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50');
        }
    });
}

function clearPortfolioFilter() {
    for (let i = 0; i < portfolioFilter.length; i++) {
        portfolioFilter[i].setAttribute('class', 'portfolio-filter px-8 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700');
    }
}

function displayPortfolioItem(filter) {
    for (let i = 0; i < portfolioItem.length; i++) {
        portfolioItem[i].style.setProperty('transition', 'all 0.5s ease');
        portfolioItem[i].style.setProperty('transform', 'scale(.5)');
        portfolioItem[i].style.setProperty('opacity', '0');
    }
    
    setTimeout(() => {
        for (let i = 0; i < portfolioItem.length; i++) {
            portfolioItem[i].classList.remove('relative');
            portfolioItem[i].classList.add('absolute', 'invisible');

            if (portfolioItem[i].getAttribute('data-category') == filter || filter == 'all') {
                portfolioItem[i].classList.add('relative');
                portfolioItem[i].classList.remove('absolute', 'invisible');
                portfolioItem[i].style.setProperty('opacity', '1');
                portfolioItem[i].style.setProperty('transform', 'scale(1)');
            }
        }
    }, 500);
}


for (let i = 0; i < fontOption.length; i++) {
    fontOption[i].addEventListener('click', function(e) {
        body.classList.remove(currentFont);
        currentFont = `font-${fontOption[i].getAttribute('data-font')}`;
        body.classList.add(currentFont);
        
        if (fontOption[i].contains(e.target)) {
            clearFontSettings();
            fontOption[i].classList.add('active', 'bg-slate-50', 'dark:bg-slate-800', 'border-primary');
            fontOption[i].classList.remove('border-slate-200', 'dark:border-slate-700');
        }
    });
}


for (let i = 0; i < themeColors.length; i++) {
    themeColors[i].addEventListener('click', function() {
        clearColorSettings();
        themeColors[i].classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');
        document.documentElement.style.setProperty('--color-primary', themeColors[i].getAttribute('data-primary'));
        document.documentElement.style.setProperty('--color-secondary', themeColors[i].getAttribute('data-secondary'));
        document.documentElement.style.setProperty('--color-accent', themeColors[i].getAttribute('data-accent'));
    });
}


resetSettingsBtn.addEventListener('click', function() {
    body.classList.remove(currentFont);
    defaultSettings();
});

function clearFontSettings() {
    for (let i = 0; i < fontOption.length; i++) {
        fontOption[i].classList.remove('active', 'bg-slate-50', 'dark:bg-slate-800', 'border-primary');
        fontOption[i].classList.add('border-slate-200', 'dark:border-slate-700');
    }
}

function clearColorSettings() {
    for (let i = 0; i < themeColors.length; i++) {
        themeColors[i].classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');
    }
}

function defaultSettings() {
    currentFont = 'font-tajawal';
    body.classList.add(currentFont);
    clearFontSettings();
    fontOption[1].classList.add('active', 'bg-slate-50', 'dark:bg-slate-800', 'border-primary');
    fontOption[1].classList.remove('border-slate-200', 'dark:border-slate-700');
    
    clearColorSettings();
    document.documentElement.style.setProperty('--color-primary', themeColors[0].getAttribute('data-primary'));
    document.documentElement.style.setProperty('--color-secondary', themeColors[0].getAttribute('data-secondary'));
    document.documentElement.style.setProperty('--color-accent', themeColors[0].getAttribute('data-accent'));
    themeColors[0].classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-slate-900');
}



customSelects.forEach((select) => {
    select.addEventListener('click', function(e) {
        e.stopPropagation();
        customSelects.forEach((otherSelect) => {
            if (otherSelect != select) {
                otherSelect.nextElementSibling.classList.add('hidden');
                otherSelect.setAttribute('aria-expanded', 'false');
            }
        });
        
        const options = select.nextElementSibling;
        const isHidden = options.classList.contains('hidden');
        
        if (isHidden) {
            options.classList.remove('hidden');
            select.setAttribute('aria-expanded', 'true');
        } else {
            options.classList.add('hidden');
            select.setAttribute('aria-expanded', 'false');
        }
    });
});

customOptions.forEach((option) => {
    option.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const value = option.getAttribute('data-value');
        const optionsContainer = option.parentElement;
        const selectDiv = optionsContainer.previousElementSibling;
        const selectedText = selectDiv.querySelector('.selected-text');
        
        selectedText.textContent = value;
        selectedText.classList.remove('text-slate-500', 'dark:text-slate-400');
        selectedText.classList.add('text-slate-800', 'dark:text-white');
        
        optionsContainer.classList.add('hidden');
        selectDiv.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', function() {
    customOptions.forEach((options) => {
        options.classList.add('hidden');
        options.previousElementSibling.setAttribute('aria-expanded', 'false');
    });
});


SubmitBtn.addEventListener('click', function(e) {
    
    let fullNameError = document.querySelector('#full-name-error');
    let emailError = document.querySelector('#email-error');
    let projectDetailsError = document.querySelector('#project-details-error');
    
    fullNameError.classList.add('hidden');
    emailError.classList.add('hidden');
    projectDetailsError.classList.add('hidden');
    
    fullNameInput.classList.remove('border-red-500');
    emailInput.classList.remove('border-red-500');
    projectDetailsInput.classList.remove('border-red-500');
    
    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();
    let projectDetails = projectDetailsInput.value.trim();
    
    if (!fullName || !email || !projectDetails) {
        if (!fullName) {
            fullNameInput.classList.add('border-red-500');
            fullNameError.classList.remove('hidden');
        }
        
        if (!email) {
            emailInput.classList.add('border-red-500');
            emailError.classList.remove('hidden');
        }
        
        if (!projectDetails) {
            projectDetailsInput.classList.add('border-red-500');
            projectDetailsError.classList.remove('hidden');
        }
        return;
    }
    
    showSuccessPopup();
    
    fullNameInput.value = '';
    emailInput.value = '';
    document.querySelector('#phone').value = '';
    projectDetailsInput.value = '';
});

function showSuccessPopup() {
    const overlay = document.getElementById('success-overlay');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    const closeBtn = document.getElementById('success-popup-close');
    closeBtn.addEventListener('click', closeSuccessPopup);
}

function closeSuccessPopup() {
    const overlay = document.getElementById('success-overlay');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}







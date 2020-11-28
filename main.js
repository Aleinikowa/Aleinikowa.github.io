let nav = document.getElementsByClassName('nav'),
    text = document.getElementById('polina'),
    front = document.getElementsByClassName('front')[0],
    aboutHeader = document.getElementsByClassName('aboutHeader')[0],
    aboutText = document.getElementsByClassName('aboutText')[0],
    skillsHeader = document.getElementsByClassName('skills-wrapper__header')[0],
    skillCircle = document.getElementsByClassName('skill-circle'),
    portfolioHeader = document.getElementsByClassName('portfolio-wrapper__header')[0],
    slider = document.getElementsByClassName('slider')[0],
    footer = document.getElementsByClassName('wrapper')[0],
    btnNext = document.getElementsByClassName('btn-right')[0],
    btnPrev = document.getElementsByClassName('btn-left')[0],
    track = document.getElementsByClassName('slider-track')[0];
    span = document.getElementsByClassName('slider-span'),
    btnMain = document.getElementById('btn-main'),
    about = document.getElementById('about'),
    aboutBlock = document.getElementsByClassName('about')[0],
    heightAbout = aboutBlock.clientHeight,
    mainBlock = document.getElementsByClassName('main')[0],
    heightMain = mainBlock.clientHeight,
    skills = document.getElementById('skills'),
    portfolio = document.getElementById('portfolio'),
    portfolioBlock = document.getElementsByClassName('portfolio')[0],
    heightPortfolio = portfolioBlock.clientHeight,
    contacts = document.getElementById('contacts'),
    decorationBlock = document.getElementsByClassName('decoration')[0],
    heightDecoration = decorationBlock.clientHeight,
    position = 0;

btnMain.onclick = () => {
    let timerId = setInterval(() => window.scrollBy(0,10), 5);
    setTimeout(() => { clearInterval(timerId)}, heightMain / 2);
}

about.onclick = () => {
    let timerId = setInterval(() => window.scrollBy(0,10), 5);
    setTimeout(() => { clearInterval(timerId)}, heightMain / 2);
}

skills.onclick = () => {
    let timerId = setInterval(() => window.scrollBy(0,20), 10);
    setTimeout(() => { clearInterval(timerId)}, (heightMain + heightAbout) / 2);
}

portfolio.onclick = () => {
    let skillsBlock = document.getElementsByClassName('skills')[0],
        heightScills = skillsBlock.clientHeight;
        console.log ((heightMain + heightAbout + heightScills));
    let timerId = setInterval(() => window.scrollBy(0,20), 10);
    setTimeout(() => { clearInterval(timerId)}, (heightMain + heightAbout + heightScills) / 2);
}

contacts.onclick = () => {
    let skillsBlock = document.getElementsByClassName('skills')[0],
    heightScills = skillsBlock.clientHeight;
    let timerId = setInterval(() => window.scrollBy(0,20), 10);
    setTimeout(() => { clearInterval(timerId)}, (heightMain + heightAbout + heightScills + heightPortfolio + heightDecoration) / 2);
}

function animationBorder() {
    text.style.animationPlayState = 'running';
}
setTimeout(animationBorder, 700);

function animation(elem) {
    elem.classList.add('_activ');
}

function animationFront() {
    front.classList.add('_activ');
}
setTimeout(animationFront, 1200);

function animationSkills() {
   let i = 0;                      

    function myLoop() {             
      setTimeout(function() {   
        skillCircle[i].classList.add('_activ');
        i++;                        
        if (i < 5) {            
          myLoop();                 
        }                           
      }, 500)
    }
    
    myLoop();  
}

window.onload = () => {
    let width = document.documentElement.clientWidth,
        position = 0;

    checkBtns();

    if (width > 860) {
        showCarouselWithThreeItems();
    }
    if (width < 1170) {
        showSmallCarousel();
    }

    window.addEventListener('scroll', function() {
        const heightScroll = window.pageYOffset;
        console.log(window.pageYOffset)


        if (heightScroll >= 400 && heightScroll <= 980) {
            animation(aboutHeader);
            setTimeout(animation(aboutText), 500);
        }

        if (heightScroll > 1000 && heightScroll < 1580) {
            animation(skillsHeader);
            setTimeout(animationSkills(), 100);
        }

        if (heightScroll > 1600 && heightScroll < 2400) {
            animation(portfolioHeader);
            setTimeout(animation(slider), 500);
        }
        if (heightScroll > 2800 && heightScroll < 4440) {
            animation(portfolioHeader);
            setTimeout(animation(footer), 100);
        }
    });
    function checkBtns(windowWidth) {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(windowWidth * 3);
    };
}

window.addEventListener('resize', function(){
    let width = document.documentElement.clientWidth;

    if (width > 860) {
        showCarouselWithThreeItems();
    }
    if (width < 1170) {
        showSmallCarousel();
    }

});

function showCarouselWithThreeItems() {
    let item = document.getElementsByClassName('card'),
        itemWidth = item[0].offsetWidth,
        movePosition = itemWidth + 4;
    
    btnPrev.onclick = () => {
        position += movePosition;
        track.style.transform = `translateX(${position}px)`;

        let spanData = document.getElementById('span1'),
            counter = spanData.getAttribute('data-counter');
            tempSpan = span[counter - 2];

        tempSpan.classList.add('color');
        span[counter - 1].classList.remove('color');
        spanData.dataset.counter = counter - 1;

        
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(movePosition * 3);
    };
    
    btnNext.onclick = () => {
        position -= movePosition;
        track.style.transform = `translateX(${position}px)`;

        let spanData = document.getElementById('span1'),
            counter = spanData.getAttribute('data-counter'),
            tempSpan = span[counter];

        tempSpan.classList.add('color');
        span[--counter].classList.remove('color');
        spanData.dataset.counter =  counter + 2;

        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(movePosition * 3);
    };
}

function showSmallCarousel() {
    let item = document.getElementsByClassName('slider'),
    itemWidth = item[0].offsetWidth,
    movePosition = itemWidth;

    btnPrev.onclick = () => {
        position += movePosition;
        track.style.transform = `translateX(${position}px)`;
        
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(movePosition * 5);
    };

    btnNext.onclick = () => {
        position -= movePosition;
        track.style.transform = `translateX(${position}px)`;

        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(movePosition * 5);
    };
}


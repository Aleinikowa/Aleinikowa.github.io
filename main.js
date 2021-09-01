let text = document.getElementById('polina'),
    front = document.getElementsByClassName('front')[0],
    aboutHeader = document.getElementsByClassName('aboutHeader')[0],
    aboutText = document.getElementsByClassName('aboutText')[0],
    skillsHeader = document.getElementsByClassName('skills-wrapper__header')[0],
    skillCircle = document.getElementsByClassName('skill-circle'),
    portfolioHeader = document.getElementsByClassName('portfolio-wrapper__header')[0],
    slider = document.getElementsByClassName('slider')[0],
    footer = document.getElementsByClassName('wrapper')[0],
    btnMain = document.getElementById('btn-main'),
    about = document.getElementById('about'),
    aboutBlock = document.getElementsByClassName('about')[0],
    mainBlock = document.getElementsByClassName('main')[0],
    skills = document.getElementById('skills'),
    portfolio = document.getElementById('portfolio'),
    portfolioBlock = document.getElementsByClassName('portfolio')[0],
    contacts = document.getElementById('contacts'),
    decorationBlock = document.getElementsByClassName('decoration')[0];

btnMain.onclick = () => {
    let heightMain = mainBlock.clientHeight;

    let timerId = setInterval(() => window.scrollBy(0,10), 5);
    setTimeout(() => { clearInterval(timerId)}, heightMain / 2);
}

about.onclick = () => {
    let heightMain = mainBlock.clientHeight;

    let timerId = setInterval(() => window.scrollBy(0,10), 5);
    setTimeout(() => { clearInterval(timerId)}, heightMain / 2);
}

skills.onclick = () => {
    let heightMain = mainBlock.clientHeight,
        heightAbout = aboutBlock.clientHeight;

    let timerId = setInterval(() => window.scrollBy(0,20), 10);
    setTimeout(() => { clearInterval(timerId)}, (heightMain + heightAbout) / 2);
}

portfolio.onclick = () => {
    let heightMain = mainBlock.clientHeight,
        heightAbout = aboutBlock.clientHeight,
        skillsBlock = document.getElementsByClassName('skills')[0],
        heightScills = skillsBlock.clientHeight;

    let timerId = setInterval(() => window.scrollBy(0,20), 10);
    setTimeout(() => { clearInterval(timerId)}, (heightMain + heightAbout + heightScills) / 2);
}

contacts.onclick = () => {
    let heightMain = mainBlock.clientHeight,
        heightAbout = aboutBlock.clientHeight,
        skillsBlock = document.getElementsByClassName('skills')[0],
        heightScills = skillsBlock.clientHeight,
        heightPortfolio = portfolioBlock.clientHeight,
        heightDecoration = decorationBlock.clientHeight;

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
    if (heightScroll > 2380 && heightScroll < 4440) {
        animation(portfolioHeader);
        setTimeout(animation(footer), 100);
    }
});

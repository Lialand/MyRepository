let butact = document.querySelectorAll('.topmenu__symbol'); //один блок с линиями
let butact_child = document.querySelectorAll('.topmenu__symbol_line'); //псевдомассив линий
let active = false;
let blockact = document.body.querySelector('.krona'); //поиск блока, который должен показываться при active
let inst = document.getElementById('imagecreator');
let webH = document.querySelector('section.contentwrappermob header');

let mobSections = document.querySelectorAll('.web');
let hideBlocks = document.querySelectorAll('.hideElem');

for (i=0; i < butact.length; i++) {
    butact[i].addEventListener('click', button); //событие привязано к блоку с линиями
}

//меню с двумя линиями в адаптиве ----------------------------

function button() {
    if (!active) {
        for (let i=0; i < butact_child.length; i++) {
            butact_child[i].classList.add('active');  //перебор и присваивание каждой линии класса active
        }
        for (let i=0; i < butact.length; i++) {
            butact[i].classList.add('active'); //присваивание active для работы addEventListener
        }
        blockact.classList.remove('nodisplayer'); //показать активный блок
        document.body.style.overflow=('hidden'); //скрыть остальное
        active = true;            
    }
    else {
        for (let i=0; i < butact_child.length; i++) {
            butact_child[i].classList.remove('active'); //обратный процесс
        }
        for (let i=0; i < butact.length; i++) {
            butact[i].classList.remove('active');
        }
        blockact.classList.add('nodisplayer');
        active = false;
    }
}  

let startTouchY, endTouchY, pauseScroll, pauseScrollTouch, resizeScrollNull, DOMReloaded;
pauseScroll = pauseScrollTouch = DOMReloaded = false;

let y, howManyScrolls;
y = howManyScrolls = 0;
let y0 = inst.clientHeight;

document.body.style.overflow = "hidden";

addEventListener('resize', scrollNull); //default screen position if width has been changed
document.addEventListener('DOMContentLoaded', (e) => {DOMReloaded = true; scrollNull(e)}); //or page has been reloaded

document.addEventListener('wheel', (e) => {if (!pauseScroll) scroll(e)}, { passive: false }); //desktop scroll with mouse wheel 
window.addEventListener('scroll', (e) => e.preventDefault(), { passive: false }); //stop scroll event

document.addEventListener('touchstart',(e) => {if(!pauseScrollTouch && !active) getTouchStart(e)}); //scroll on touchpads ---
document.addEventListener('touchend', (e) => {if(!pauseScrollTouch && !active) getTouchEnd(e)} ); //---
document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false } );

function getTouchStart(e) {
    startTouchY = e.changedTouches[0].pageY;
}

function getTouchEnd(e) {
    endTouchY = e.changedTouches[0].pageY;

    if (startTouchY - endTouchY > 0 && howManyScrolls <= 3) {
        y += y0;
        howManyScrolls += 1;
    }
    else if (startTouchY - endTouchY < 0 && howManyScrolls <= 4 && y > 0) {
        y -= y0;
        howManyScrolls -= 1;
    }

    document.body.style.marginTop = -y + "px";

    pauseScrollTouch = true;
    window.setTimeout( () => {pauseScrollTouch = false}, "1000" );

    if (window.innerWidth <= 541)
        clearClass(mobSections);
    else 
        clearClass(hideBlocks)
}

function clearClass(what) {
    switch (howManyScrolls) {
        case (0):
            what[0].classList.add('displayer');
            break;
        case (1):
            what[1].classList.add('displayer');
            break;
        case (2):
            what[2].classList.add('displayer');
            break;
        case (3):
            what[3].classList.add('displayer');
            break;
        case (4):
            what[4].classList.add('displayer');
            break;
    }
}

function scroll(e) {

    y0 = inst.clientHeight;

    if (window.innerWidth > 1390) {

        e = e || window.event;
        let delta = e.deltaY || e.detail || e.wheelDelta;

        if (delta > 0 && howManyScrolls <= 3) {
            y += y0;
            howManyScrolls += 1;
        }
        else if (delta < 0 && howManyScrolls <= 4 && y > 0) {
            y -= y0;
            howManyScrolls -= 1;
        }
        
        document.body.style.marginTop = -y + "px";

        pauseScroll = true;
        window.setTimeout( () => {pauseScroll=false}, "1000" );

    }

    clearClass(hideBlocks);
}

function scrollNull() {

    if (window.innerWidth > 541)
        resizeScrollNull = true;
    else 
        resizeScrollNull = false;

    if (DOMReloaded || resizeScrollNull) {
        document.body.style.marginTop = 0;
        howManyScrolls = 0;
        y = 0;
        y0 = inst.clientHeight;

        if (y0 === 0) 
            y0 = webH.clientHeight;
        else 
            y0 = inst.clientHeight
    }

    DOMReloaded = false;
}

//анимация для картинок

    //это на инстаграм

let animYout, animInst, animBeh, stopanimYout, stopanimInst, stopanimBeh, reverse;
animYout = animInst = animBeh = 0;
reverse = stopanimInst = stopanimYout = stopanimBeh = false;

function imgPosInst() {
    let divHgts = document.querySelectorAll("div.height");
    if (document.body.style.marginTop == -y0 + "px" && !stopanimInst) {
        animInst += 15; //тут можно установить скорость перемещения картинок
        for (i = 0 ; i < divHgts.length ; i++) {
            if (i%2 == 0) 
                divHgts[i].style.transform = 'translateY(' + animInst + 'px)';         
            else
                divHgts[i].style.transform = 'translateY(' + (-animInst) + 'px)';
        }
        if (animInst > 563) //для беспрерывного движения картинок необходимо тут задать ТОЛЬКО animInst=0
            stopanimInst = true;
    }                
    else if (document.body.style.marginTop !== -y0 + "px" && stopanimInst) {
        animInst -= 15;
        for (i = 0 ; i < divHgts.length ; i++) {
            if (i%2 == 0) 
                divHgts[i].style.transform = 'translateY(' + animInst + 'px)';    
            else
                divHgts[i].style.transform = 'translateY(' + (-animInst) + 'px)';
        } 
        if (animInst == 0)
            stopanimInst = false;
    }
}

setInterval(imgPosInst, "24");

    //это на ютуб

function imgPosYout() {
    let pics = document.getElementById("imgyoutube").querySelectorAll(".width");
    if (document.body.style.marginTop == -y0 * 3 + "px" && !stopanimYout) {
        animYout += 20; //тут можно установить скорость перемещения картинок
        for (i = 0 ; i < pics.length ; i++) {
            if (i%2 == 0) 
                pics[i].style.transform = 'translateX(' + animYout + 'px)';    
            else
                pics[i].style.transform = 'translateX(' + (-animYout) + 'px)';
        }
        if (animYout > 700)
            stopanimYout = true;
    }  
    else if (document.body.style.marginTop !== -y0 * 3 + "px" && stopanimYout) {
        animYout -= 20;
        for (i = 0 ; i < pics.length ; i++) {
            if (i%2 == 0) 
                pics[i].style.transform = 'translateX(' + animYout + 'px)';    
            else
                pics[i].style.transform = 'translateX(' + (-animYout) + 'px)';
        } 
        if (animYout == 0)
            stopanimYout = false;
    }
}

setInterval(imgPosYout, "24");

    //это на беханс

function imgPosBeh() {
    let pics = document.getElementById("imgbehance").querySelectorAll("img");
    if (document.body.style.marginTop == -y0 * 2 + "px" && !stopanimBeh) {
        animBeh += 20; //тут можно установить скорость перемещения картинок
        for (i = 0 ; i < pics.length ; i++) {
            if (i%2 == 0) 
                pics[i].style.transform = 'translateY(' + animBeh + 'px)';    
            else
                pics[i].style.transform = 'translateY(' + (-animBeh) + 'px)';
        }
        if (animBeh > 700)
            stopanimBeh = true;
    }  
    else if (document.body.style.marginTop !== -y0 * 2 + "px" && stopanimBeh) {
        animBeh -= 20;
        for (i = 0 ; i < pics.length ; i++) {
            if (i%2 == 0) 
                pics[i].style.transform = 'translateY(' + animBeh + 'px)';    
            else
                pics[i].style.transform = 'translateY(' + (-animBeh) + 'px)';
        } 
        if (animBeh == 0)
            stopanimBeh = false;
    }
}

setInterval(imgPosBeh, "24");
    let butact = document.querySelectorAll('.topmenu__symbol'); //один блок с линиями
    let butact_child = document.querySelectorAll('.topmenu__symbol_line'); //псевдомассив линий
    let active = false;
    let blockact = document.body.querySelector('.krona'); //поиск блока, который должен показываться при active
    let inst = document.getElementById('imagecreator');
    let winH = document.querySelector('section.sitehead');

    for (i=0; i < butact.length; i++) {
        butact[i].addEventListener('click', button); //событие привязано к блоку с линиями
    }

    //меню с двумя линиями в адаптиве ----------------------------

    function button() {
        console.log();
        if (!active) {
            for (i=0; i < butact_child.length; i++) {
                butact_child[i].classList.add('active');  //перебор и присваивание каждой линии класса active
            }
            for (i=0; i < butact.length; i++) {
                butact[i].classList.add('active'); //присваивание active для работы addEventListener
            }
            blockact.classList.remove('nodisplayer'); //показать активный блок
            document.body.style.overflow=('hidden'); //скрыть остальное
            active = true;            
        }
        else {
            for (i=0; i < butact_child.length; i++) {
                butact_child[i].classList.remove('active'); //обратный процесс
            }
            for (i=0; i < butact.length; i++) {
                butact[i].classList.remove('active');
            }
            blockact.classList.add('nodisplayer');
            document.body.style.overflow=('auto');
            active = false;
        }
    }  

    //тут jquery -------------------------------------------------

    // addEventListener('resize', scrollSizeScreenChecker)

    // function scrollSizeScreenChecker() {
    //     if (document.body.offsetWidth > 540) {
    //         $(function() {
    //             $.scrollify({
    //             section : ('.content'),
    //             scrollbars: false,
    //             });
    //         });
    //     }

    //     else {
    //         $(function() {
    //             $.scrollify({
    //             section : ('.web'),
    //             scrollbars : false,
    //             });
    //         });
    //     }
    // }

    //скролл на джаваскрипте ----------------------------------------   

    let pauseScroll = false;
    let y = 0;
    let y0 = inst.scrollHeight;
    document.body.style.overflow = "hidden";

    addEventListener('resize', scrollNull);
    document.addEventListener('wheel', scroll);

    function scroll(e) {
        // console.log("ok", e);

        if (!pauseScroll) {
            e = e || window.event;
            let delta = e.deltaY || e.detail || e.wheelDelta;

            if (delta > 0 && y <= (y0 * 3)) 
                y += y0;
            else if (delta < 0 && y <= (y0 * 4) && y > 0) 
                y -= y0;
            
            // console.log(y);

            document.body.style.marginTop = -y + "px";
            pauseScroll = true;
        }

        else 
            setTimeout(function() {pauseScroll=false}, "1000");
    }

    function scrollNull() {
        y = 0;
        y0 = winH.scrollHeight;
    }

    //анимация для картинок

        //это на инстаграм

    let animYout, animInst, animBeh, stopanimYout, stopanimInst, stopanimBeh, reverse;
    animYout = animInst = animBeh = 0;
    reverse = stopanimInst = stopanimYout = stopanimBeh = false;
    
    function imgPosInst() {
        let divHgts = document.querySelectorAll("div.height");
        if (document.body.style.marginTop == -y0 + "px" && !stopanimInst) {
            animInst += 10; //тут можно установить скорость перемещения картинок
            for (i = 0 ; i < divHgts.length ; i++) {
                if (i%2 == 0) 
                   divHgts[i].style.transform = 'translateY(' + animInst + 'px)';         
                else
                   divHgts[i].style.transform = 'translateY(' + (-animInst) + 'px)';
            }
            if (animInst > 563) //для беспрерывного движения картинок необходимо тут задать ТОЛЬКО animInst=0
                stopanimInst = true;
        }                
        else if  (document.body.style.marginTop !== -y0 + "px") {
            stopanimInst = false;
            animInst = 0;
        }
    }

    setInterval(imgPosInst, "24");

        //это на ютуб
    
    function imgPosYout() {
        let pics = document.getElementById("imgyoutube").querySelectorAll("img");
        if (document.body.style.marginTop == -y0 * 3 + "px" && !stopanimYout) {
            animYout += 10; //тут можно установить скорость перемещения картинок
            for (i = 0 ; i < pics.length ; i++) {
                if (i%2 == 0) 
                   pics[i].style.transform = 'translateX(' + animYout + 'px)';    
                else
                   pics[i].style.transform = 'translateX(' + (-animYout) + 'px)';
            }
            if (animYout > 1167)
                stopanimYout = true;
        }  
        else if (document.body.style.marginTop !== -y0 * 3 + "px" && stopanimYout) {
            animYout -= 10;
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
            animBeh += 10; //тут можно установить скорость перемещения картинок
            for (i = 0 ; i < pics.length ; i++) {
                if (i%2 == 0) 
                    pics[i].style.transform = 'translateY(' + animBeh + 'px)';    
                else
                    pics[i].style.transform = 'translateY(' + (-animBeh) + 'px)';
            }
            if (animBeh > 1167)
                stopanimBeh = true;
        }  
        else if (document.body.style.marginTop !== -y0 * 2 + "px" && stopanimBeh) {
            animBeh -= 10;
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
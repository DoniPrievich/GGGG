let slideArry = [
    {
        img: "./images/stroke4/slide_1.png",
        title: "Безопасность 24/7",
        info: "Не беспокойтесь за детей! Двор благоустроен, закрыт от окружающих. Войти на территорию можно только через лобби комплекса с системой контроля доступа."
    },
    {
        img: "./images/stroke4/slide_2.png",
        title: "Подземный паркинг",
        info: "Вам не нужно ходить далеко, чтобы получить необходимые услуги. Здесь предусмотрено все для вашего комфорта."
    },
    {
        img: "./images/stroke4/slide_3.png",
        title: "Супермаркет",
        info: "Купить продукты в супермаркете рядом с домом и приготовить хороший ужин - лучшая забота о близких"
    },
    {
        img: "./images/stroke4/slide_4.png",
        title: "Фасад",
        info: "Фасад выполнен из монолитного  железобетона который придает стильный и аккуратный внешний облик нашему жилому комплексу"
    },
    {
        img: "./images/stroke4/slide_5.png",
        title: "Разришительные локументы",
        info: "Земельный участок находится собственности у строительной компании и так же имеется лицензия второго уровня на строительство получен главный разрешительный документ-архитектурно-градостроительное заключение"
    },
]






// swipper//////////////////////////////
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//   slider stroke 4///////////


let body = document.body;

let btnOpen = document.querySelector('.menu_open');
let btnClose = document.querySelector('.nav_left_links__close');
let nav_Menu = document.querySelector('.nav_left_links');
let slid_Idex = 0;

btnOpen.addEventListener('click', () => {
    nav_Menu.classList.add('nav_left_links-active');
    body.classList.add('body-hiddn')
})
btnClose.addEventListener('click', () => {
    nav_Menu.classList.remove('nav_left_links-active');
    body.classList.remove('body-hiddn')
})

window.addEventListener("click", (event) => {
    const data = event.target
    if (data.hasAttribute("data-stroke4_content__left_prev")) {
        if (slid_Idex > 0) {
            slid_Idex--
        } else {
            slid_Idex = slideArry.length - 1
        };
        document.querySelector(".stroke4_content__left__2").style.background = 'url( ' + slideArry[slid_Idex].img + ')'
        console.log(slid_Idex)
        const infoDiv =
            `<div class="stroke4_content_right_block stroke4_content_right_block1" data-stroke4_right_block_2>
                        <h1>${slideArry[slid_Idex].title}</h1>
                        <p>${slideArry[slid_Idex].info}</p>
                        <button class="btn_learMore">связатся с нами <i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>`
        document.querySelector("[data-stroke4_right_block_2]").remove()
        document.querySelector('.stroke4_content__right__2').insertAdjacentHTML("beforeend", infoDiv)

    }
    if (data.hasAttribute("data-stroke4_content__left_next")) {
        if (slid_Idex < slideArry.length - 1) {
            slid_Idex++
        } else {
            slid_Idex = 0
        };
        document.querySelector(".stroke4_content__left__2").style.background = 'url( ' + slideArry[slid_Idex].img + ')'
        console.log(slid_Idex)
        const infoDiv =
            `<div class="stroke4_content_right_block stroke4_content_right_block1" data-stroke4_right_block_2>
                        <h1>${slideArry[slid_Idex].title}</h1>
                        <p>${slideArry[slid_Idex].info}</p>
                        <button class="btn_learMore">связатся с нами <i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>`
        document.querySelector("[data-stroke4_right_block_2]").remove()
        document.querySelector('.stroke4_content__right__2').insertAdjacentHTML("beforeend", infoDiv)

    }

});

var stroke4_left = document.querySelector('.stroke4_content__left')

// gsap////////////////////////////

gsap.to('.stroke4_content__left', {
    scrollTrigger: {
        trigger: '.stroke4_content_right_block1',
        start: "top bottom",
        end: "bottom bottom", 
        // markers: true,
        onEnter: () => {
            stroke4_left.classList.add('stroke4__left__slide1');
        },
        onLeave: () => {
            console.log('leave')
            stroke4_left.classList.remove('stroke4__left__slide1');
            stroke4_left.classList.add('stroke4__left__slide2');
        },
        onLeaveBack: () => {
        },
        onEnterBack: () => {
            stroke4_left.classList.add('stroke4__left__slide1');
            stroke4_left.classList.remove('stroke4__left__slide2');
            console.log('enterBack')
        }
    },
})

gsap.to('.stroke4_content__left', {
    scrollTrigger: {
        trigger: '.stroke4_content_right_block3',
        start: "top bottom",
        end: "bottom bottom", 
        // markers: true,
        onEnter: () => {
            stroke4_left.classList.add('stroke4__left__slide3');
            stroke4_left.classList.remove('stroke4__left__slide2'); 
     
        },
        onLeave: () => {
         
            stroke4_left.classList.remove('stroke4__left__slide3');
            stroke4_left.classList.add('stroke4__left__slide4');
        },
        onLeaveBack: () => {
      
            stroke4_left.classList.remove('stroke4__left__slide3');
            stroke4_left.classList.add('stroke4__left__slide2');
        },
        onEnterBack: () => {
            stroke4_left.classList.add('stroke4__left__slide3');
            // stroke4_left.classList.('stroke4__left__slide4');
  
        }
    },
})


gsap.to('.stroke4_content__left', {
    scrollTrigger: {
        trigger: '.stroke4_content_right_block4',
        start: "top bottom",
        end: "bottom bottom", 
        // markers: true,
        onEnter: () => {
            stroke4_left.classList.add('stroke4__left__slide4');
            stroke4_left.classList.remove('stroke4__left__slide3'); 
            console.log('enter')
        },
        onLeave: () => {
            console.log('leave')
            stroke4_left.classList.remove('stroke4__left__slide4');
            stroke4_left.classList.add('stroke4__left__slide5');
        },
        onLeaveBack: () => {
            console.log('leaveBlack')
            stroke4_left.classList.remove('stroke4__left__slide5');
            stroke4_left.classList.remove('stroke4__left__slide4');
        },
        onEnterBack: () => {
            stroke4_left.classList.add('stroke4__left__slide4');
            stroke4_left.classList.remove('stroke4__left__slide5');
            // stroke4_left.classList.('stroke4__left__slide4');
            console.log('enterBack')
        }
    },
})

// CRM window ////////////////////////

function open__windowCRM() {
    let crmForm__window = document.querySelector('.crmForm__window');
    body.classList.toggle('body-hiddn')
    crmForm__window.style.top = "0%";
    document.querySelector('.crmForm__window_close').addEventListener('click', () => {
        crmForm__window.style.top = "-100%"
        body.classList.remove('body-hiddn')
    })
}

// CRM window ////////////////////////




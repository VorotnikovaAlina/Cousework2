document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".list--item__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".container--dropdown");

            document.querySelectorAll(".list--item__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".container--dropdown").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-header__menu-down-item");
                }
            })
            dropdown.classList.toggle("active-header__menu-down-item");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".header__menu-down-list")) {
            document.querySelectorAll(".container--dropdown").forEach(el => {
                el.classList.remove("active-header__menu-down-item");
            })
            document.querySelectorAll(".list--item__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    })
})

/* new Swiper('.image-slider', { */

var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


document.querySelector(".list--item__btn").addEventListener("click", function(e) {
    document.querySelector(".list--item__btn__icon").classList.toggle("active");
});
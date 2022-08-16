// cahmge the navbar style on scroll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})


var swiper = new Swiper(".mySwipper" ,{
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },   
    });
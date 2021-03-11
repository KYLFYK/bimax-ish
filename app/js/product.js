$('.pack__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    prevArrow: $('.arr-left'),
    nextArrow: $('.arr-right')
});


const btns = document.querySelectorAll('.pr-btn')
const slides = document.querySelectorAll('.prod-card-s')

slides.forEach(slide => {
    slide.style.display = 'none';
})
slides[0].style.display = 'block';

btns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        document.querySelector('.pr-btn.active').classList.remove('active')
        this.classList.add('active')
        slides.forEach(slide => {
            slide.style.display = 'none';
        })
        slides[index].style.display = 'block';
    })
})
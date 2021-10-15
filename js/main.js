let rem = parseInt(window.getComputedStyle(document.querySelector('html')).fontSize);

function topBarHide() {
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    const topBar = document.querySelector('.top-bar');
    if (prevScrollPos > currentScrollPos || prevScrollPos <= 100) {
      topBar.style.transform = 'translateY(0)';
    } else {
      topBar.style.transform = 'translateY(-100%)';
    }
    if (prevScrollPos >= 100) {
      topBar.classList.add('--scrolled');
    } else {
      topBar.classList.remove('--scrolled');
    }
    prevScrollPos = currentScrollPos;
  })
}

topBarHide();

const aboutSwiper = new Swiper('.about__slider .swiper', {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 2 * rem,
  navigation: {
    nextEl: '.about__slider .swiper-button-next',
    prevEl: '.about__slider .swiper-button-prev',
  }
});
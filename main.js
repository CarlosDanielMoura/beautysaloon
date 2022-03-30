/* Ao cliclar nos icones  de hamburger e X  ele abre e fecha */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toogle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') // Função toggle serve para caso tiver uma classe ela retira ou caso não tiver ela coloca
  })
}

/*Ao clicar nos links do menu ele fecha o menu e vai até o desejado*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Colocando a sombra  no scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight // Pegando o tamanho do header!

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const backToTopButton = document.querySelector('.back-to-top')
function BackToTop() {
  /*Button to back to top */
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Menu ativo conforme a secão da página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  BackToTop()
  activateMenuAtCurrentSection()
})

/*Testimonials carousel swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*ScrolReveal: Mostrar um elementos quando der um scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image, 
   #about .text , #about .image, 
   #services header , #services .cards,
   #testimonials header, #testimonials .testimonials,
   #contact .text , #contact .links,
   #footer .brand , #footer .social`,
  { interval: 100 }
)

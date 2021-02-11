export default function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.3

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - halfWindow
        const isSectionVisible = sectionTop - halfWindow < 0
        if (isSectionVisible) {
          section.classList.add('active')
        }
      })
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}

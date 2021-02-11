export default function initCarousel() {
  const images = document.querySelector('.container')
  const image = document.querySelector('.carousel')

  for (let i = 0; i <= 3; i++) {
    const clone = image.cloneNode(true)
    images.appendChild(clone)
  }

  /** Carousel */

  document.querySelector('.container').addEventListener('wheel', startWhell)

  function startWhell(event) {
    if (event.deltaY > 0) {
      event.target.scrollBy(300, 0)
      console.log(event)
    } else {
      event.target.scrollBy(-300, 0)
    }
  }
}

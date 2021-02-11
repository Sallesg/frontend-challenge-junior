export default function initModal() {
  const openModal = document.querySelector('[data-modal="open"]')
  const closeModal = document.querySelector('[data-modal="close"]')
  const containerModal = document.querySelector('[data-modal="container"]')

  if (openModal && closeModal && containerModal) {
    function modalOpen(event) {
      event.preventDefault()
      containerModal.classList.add('active')
    }

    function modalClose(event) {
      event.preventDefault()
      containerModal.classList.remove('active')
    }

    function clickOutMOdal(event) {
      if (event.target === this) modalClose(event)
    }

    openModal.addEventListener('click', modalOpen)
    closeModal.addEventListener('click', modalClose)
    containerModal.addEventListener('click', clickOutMOdal)
  }
}

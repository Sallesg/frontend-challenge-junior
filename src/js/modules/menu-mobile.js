import outsideClick from './outsideClick.js'

export default function initiMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click']
  // 'touchstart' --> Tentei usar, porém está ocorrendo uma instabilidade para desktop, preciso pesquisar.

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('active')
      menuButton.classList.add('active')
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active')
        menuButton.classList.remove('active')
      })
    }
    eventos.forEach((event) => menuButton.addEventListener(event, openMenu))
  }
}

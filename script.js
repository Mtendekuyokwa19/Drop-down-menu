/* eslint no-console: "error" */
// eslint-disable-next-line no-unused-vars
const menuFunctionalities = (() => {
  const menuButton = document.querySelector('#menubtn')
  const menuList = document.querySelector('#ListItems')
  const buttonStatus = {
    status: false
  }
  function showMenuItems () {
    menuList.className = 'showItems'
    buttonStatus.status = true
  }

  function hideMenuItems () {
    menuList.className = 'ListItems'
    buttonStatus.status = false
  }

  function determiningToogle () {
    if (buttonStatus.status === false) {
      showMenuItems()
      changeToClosingicon()
      changeBackgroundToBlack()
    } else if (buttonStatus.status === true) {
      hideMenuItems()
      changeToHamburgerIcon()
      changeBackgroundToblue()
    }
  }

  function changeToClosingicon () {
    menuButton.textContent = 'X'
  }
  function changeToHamburgerIcon () {
    menuButton.textContent = '≡'
  }
  function changeBackgroundToBlack () {
    document.body.style.setProperty('background-color', '#050505')
  }
  function changeBackgroundToblue () {
    document.body.style.setProperty('background-color', '#070D2D')
  }

  menuButton.addEventListener('click', determiningToogle)
})()

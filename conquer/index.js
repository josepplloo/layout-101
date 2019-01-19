const trigger = document.querySelector('.nav-button')

trigger.addEventListener('click', (event) => {
  const clickedElement = event.target.closest('.nav-button')
  clickedElement.classList.remove('animation--off')
  clickedElement.classList.toggle('menu--open')
  document.querySelector('.nav-bar').classList.toggle('menu-hide')
})
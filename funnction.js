const doc = document;
const hamburgerMenu = doc.querySelector(".hamburger");
const mainNavMenu = doc.querySelector(".main-nav");

hamburgerMenu.addEventListener("click", () => {
  mainNavMenu.classList.toggle("main-nav--active");
  hamburgerMenu.classList.toggle("hamburger--active");
});

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => { 
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
      
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if(e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
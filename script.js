const menuBar=document.getElementById("menu-icon");
const shortCutE1=document.querySelector(".shortcut");
console.log(shortCutE1);

menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle("bx-x");
    shortCutE1.classList.toggle('active');
    
})

// Coffee HD image URLs for the landing page carousel
const coffeeImages = [
  'https://www.hdwallpapers.in/download/brown_coffee_mug_and_coffee_beans_hd_brown_aesthetic-1600x900.jpg',
  'https://i.pinimg.com/736x/09/52/e9/0952e9d8c44d9e1fcc1e9b6da06ca49c.jpg',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1710612079273-0a555390fef1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1509545344343-6410b9f9eb41?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const centerSection = document.querySelector('.center');
const dotsContainer = document.querySelector('.dots');
let currentImage = 0;
let intervalId;

function setBackground(index) {
  centerSection.style.backgroundImage = `url('${coffeeImages[index]}')`;
  updateDots(index);
}

function updateDots(activeIndex) {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  coffeeImages.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (idx === activeIndex ? ' active' : '');
    dot.addEventListener('click', () => {
      currentImage = idx;
      setBackground(currentImage);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
}

function nextImage() {
  currentImage = (currentImage + 1) % coffeeImages.length;
  setBackground(currentImage);
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 4000);
}

if (centerSection && dotsContainer) {
  setBackground(currentImage);
  intervalId = setInterval(nextImage, 4000);
}
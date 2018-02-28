function init() {
    let grid = document.querySelector('.grid');
    let palette = document.querySelector('.palette');
    let colorArray = ['maroon', 'red', 'magenta', 'darkorange', 'yellow', 'green', 'cyan', 'royalblue', 'blue', 'purple', 'black', 'white'];
  
    // create grid
    for (let i = 0; i < 726; i++) {
      let square = document.createElement('div');
      grid.appendChild(square);
      square.classList.add('pixels');
    };
  
    // create color palette
    for (let i = 0; i < colorArray.length; i++) {
      let colors = document.createElement('div');
      palette.appendChild(colors);
      colors.classList.add('colorTray');
      colors.style.backgroundColor = colorArray[i];
    }
  
    let pickedColor = document.querySelector('.pickedColor');
    pickedColor.style.backgroundColor = 'white';
  
    // add event listeners
    let color;
    grid.addEventListener('mousedown', function(event) {
      let fillPixel = event.target;
      fillPixel.style.background = color;
    })
    palette.addEventListener('mousedown', function(event) {
      color = event.target.style.backgroundColor;
      document.getElementsByClassName('pickedColor')[0].style.backgroundColor = color;
    })
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    init();
  });
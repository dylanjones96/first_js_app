const myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/d20.png') {
      myImage.setAttribute ('src','images/d4.png');
    } else {
      myImage.setAttribute ('src','images/d20.png');
    }
  }